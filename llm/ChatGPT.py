import openai


class ChatGPT():
    def __init__(self, model_path = 'gpt-3.5-turbo', api_key = None):
        openai.api_key = api_key
        self.model_path = model_path

    def chat(self, messages):
        response = openai.chat.completions.create(
            model=self.model_path,
            messages=messages
        )
        return response.choices[0].message.content