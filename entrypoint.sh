#!/bin/bash
set -e

# Ensure necessary directories exist and have correct permissions
mkdir -p /app/objs /usr/local/srs/objs
chmod -R 755 /app /usr/local/srs

# Start SRS in the background
/usr/local/srs/objs/srs -c /usr/local/srs/conf/srs.conf &

# Wait for SRS to start
sleep 5

# Activate conda environment
source /opt/conda/etc/profile.d/conda.sh
conda activate nerfstream

# Start your application with the new command
python /app/app.py --transport rtcpush --push_url 'http://localhost:1985/rtc/v1/whip/?app=live&stream=livestream' --tts gpt-sovits --TTS_SERVER http://gpt-sovits:9880 --REF_FILE /app/GPT-SoVITS/wav/ref_9sec.wav --REF_TEXT ""

# Keep the container running
exec "$@"
