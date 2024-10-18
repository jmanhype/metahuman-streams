import streamlit as st
from transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig
from PIL import Image
import requests
import torch

@st.cache_resource
def load_model(model_name):
    tokenizer = AutoTokenizer.from_pretrained(
        model_name,
        trust_remote_code=True,
    )
    
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        trust_remote_code=True,
        torch_dtype=torch.float16,
        device_map='auto'
    )
    
    return model, tokenizer

def process_input(model, tokenizer, image, text_prompt):
    # This is a placeholder for image processing
    # You might need to implement a custom image processing function
    # based on the model's requirements
    
    inputs = tokenizer(text_prompt, return_tensors="pt").to(model.device)
    
    output = model.generate(**inputs, max_new_tokens=200)
    
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    
    return generated_text

def main():
    st.title("MolmoE-1B Multimodal Inference App")
    
    st.write("""
    This app demonstrates how to use the MolmoE-1B-0924 model for multimodal inference.
    You can input an image and a text prompt, and the model will generate a response.
    """)
    
    model_name = "allenai/MolmoE-1B-0924"
    
    model, tokenizer = load_model(model_name)
    
    st.write("## Input")
    
    # Image input
    image_source = st.radio("Choose image source:", ("Upload", "URL"))
    if image_source == "Upload":
        uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
        if uploaded_file is not None:
            image = Image.open(uploaded_file).convert("RGB")
            st.image(image, caption="Uploaded Image", use_column_width=True)
    else:
        image_url = st.text_input("Enter image URL:")
        if image_url:
            try:
                response = requests.get(image_url, stream=True)
                image = Image.open(response.raw).convert("RGB")
                st.image(image, caption="Image from URL", use_column_width=True)
            except Exception as e:
                st.error(f"Error loading image: {str(e)}")
                image = None
    
    # Text prompt input
    text_prompt = st.text_input("Enter a text prompt:", "Describe this image.")
    
    if st.button("Generate"):
        if 'image' in locals() and image is not None and text_prompt:
            with st.spinner("Generating..."):
                try:
                    generated_text = process_input(model, tokenizer, image, text_prompt)
                    st.success("Generation complete!")
                    st.write("Generated text:", generated_text)
                except Exception as e:
                    st.error(f"An error occurred during generation: {str(e)}")
        else:
            st.warning("Please provide both an image and a text prompt.")

    st.write("""
    ## Important Considerations

    1. **Model Specifics**: This app uses the MolmoE-1B-0924 model, which is a multimodal Mixture-of-Experts LLM.
    2. **Input Format**: The model expects an image and a text prompt.
    3. **Output**: The model generates text based on the image and prompt input.
    4. **Resource Intensive**: This model can be resource-intensive. Ensure you have sufficient computational resources.
    5. **Image Format**: All images are converted to RGB format to ensure compatibility.
    """)

if __name__ == "__main__":
    main()