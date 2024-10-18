# Enable BuildKit
# syntax=docker/dockerfile:1.2

ARG BASE_IMAGE=nvcr.io/nvidia/cuda:11.6.1-cudnn8-devel-ubuntu20.04
FROM $BASE_IMAGE

# Install system dependencies with caching
RUN --mount=type=cache,target=/var/cache/apt \
    apt-get update -yq --fix-missing \
 && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    pkg-config wget cmake curl git vim build-essential \
    libavcodec-dev libavformat-dev libavutil-dev libswscale-dev \
    libgl1-mesa-glx libglib2.0-0 libssl-dev libhttp-parser-dev unzip \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install Miniconda and set up environment
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh \
    && bash Miniconda3-latest-Linux-x86_64.sh -b -p /opt/conda \
    && rm Miniconda3-latest-Linux-x86_64.sh

ENV PATH="/opt/conda/bin:${PATH}"
RUN conda init bash
RUN conda create -n nerfstream python=3.10 -y

# Set up conda environment and install dependencies with caching
SHELL ["conda", "run", "-n", "nerfstream", "/bin/bash", "-c"]
RUN --mount=type=cache,target=/root/.cache/pip \
    pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/ \
    && conda install pytorch==1.12.1 torchvision==0.13.1 cudatoolkit=11.3 -c pytorch \
    && conda install -y ffmpeg \
    && pip install --no-cache-dir flask \
    && pip install "git+https://github.com/facebookresearch/pytorch3d.git" \
    && pip install tensorflow-gpu==2.8.0 \
    && pip uninstall -y protobuf && pip install protobuf==3.20.1

# Copy requirements file
COPY requirements.txt /app/requirements.txt

# Install additional requirements with caching
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r /app/requirements.txt

# Copy and install python_rtmpstream
COPY python_rtmpstream /python_rtmpstream
WORKDIR /python_rtmpstream/python
RUN --mount=type=cache,target=/root/.cache/pip \
    rm -rf build CMakeCache.txt CMakeFiles && \
    python setup.py clean --all && \
    python setup.py build && \
    pip install .

# Install SRS
WORKDIR /tmp
RUN wget -O srs.zip https://github.com/ossrs/srs/archive/v4.0-r0.zip \
    && unzip srs.zip \
    && cd srs-4.0-r0/trunk \
    && ./configure \
    && make \
    && make install \
    && cd ../.. \
    && rm -rf srs.zip srs-4.0-r0

# Set up application
WORKDIR /app
COPY . /app
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Install NeRF modules with caching
WORKDIR /app/ernerf
RUN --mount=type=cache,target=/root/.cache/pip \
    sed -i 's/-std=c++14/-std=c++17/g' freqencoder/setup.py gridencoder/setup.py raymarching/setup.py shencoder/setup.py \
 && sed -i "s/'build_ext': BuildExtension/'build_ext': BuildExtension.with_options(use_ninja=False)/g" freqencoder/setup.py gridencoder/setup.py raymarching/setup.py shencoder/setup.py \
 && cd freqencoder && pip install . && cd .. \
 && cd gridencoder && pip install . && cd .. \
 && cd raymarching && pip install . && cd .. \
 && cd shencoder && pip install . && cd ..

WORKDIR /app

# Set up environment variables and expose ports
ENV CANDIDATE='127.0.0.1'
EXPOSE 1935 8080 1985 8000/udp

# Create necessary directories and set permissions
RUN mkdir -p /app/objs /usr/local/srs/objs && \
    chmod -R 755 /app /usr/local/srs

# Set up shell to use conda environment by default
RUN echo "conda activate nerfstream" >> ~/.bashrc

# Use the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]

# Copy the reference WAV file into the container
COPY GPT-SoVITS/wav/ref_9sec.wav /app/GPT-SoVITS/wav/ref_9sec.wav