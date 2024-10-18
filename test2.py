import streamlit as st
from transformers import AutoModelForCausalLM, AutoProcessor, GenerationConfig
from PIL import Image
import requests
import torch

@st.cache_resource
def load_model_and_processor():
    try:
        import accelerate
        device_map = 'auto'
    except ImportError:
        device_map = None
        st.warning("Accelerate library not found. Installing it may improve performance.")

    processor = AutoProcessor.from_pretrained(
        'allenai/MolmoE-1B-0924',
        trust_remote_code=True,
        torch_dtype=torch.float32,
        device_map=device_map
    )
    
    model = AutoModelForCausalLM.from_pretrained(
        'allenai/MolmoE-1B-0924',
        trust_remote_code=True,
        torch_dtype=torch.float32,
        device_map=device_map
    )
    
    return processor, model

def process_image(image, question):
    processor, model = load_model_and_processor()
    
    inputs = processor.process(
        images=[image],
        text=question
    )
    
    inputs = {k: v.to(model.device).unsqueeze(0) for k, v in inputs.items()}
    
    output = model.generate_from_batch(
        inputs,
        GenerationConfig(max_new_tokens=200, stop_strings="<|endoftext|>"),
        tokenizer=processor.tokenizer
    )
    
    generated_tokens = output[0, inputs['input_ids'].size(1):]
    generated_text = processor.tokenizer.decode(generated_tokens, skip_special_tokens=True)
    
    return generated_text

st.title("MolmoE-1B Image Analysis")

st.write("Upload an image and ask a question about it.")

uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
question = st.text_input("Enter your question about the image:")

if uploaded_file is not None and question:
    image = Image.open(uploaded_file)
    
    if image.mode != "RGB":
        image = image.convert("RGB")
    
    st.image(image, caption="Uploaded Image", use_column_width=True)
    
    if st.button("Analyze"):
        with st.spinner("Analyzing the image..."):
            response = process_image(image, question)
        
        st.write("Model's response:")
        st.write(response)

st.write("Note: This app uses the MolmoE-1B model from the Allen Institute for AI. It's designed for research and educational use.")