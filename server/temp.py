from dotenv import load_dotenv
load_dotenv()

import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

PROMPT_TEMPLATE = """Create ten multiple choice questions about the given skill and keyword list. Use these details to create the most accurate and engaging questions possible. Each question should be well thought out and have four distinct options. Ensure that one option stands out as clearly correct, while the others may be partially true but still incorrect. Do NOT reveal the answers immediately; wait until they are requested. Begin creating questions now.

Skill Name: {skill}
Keywords: {keywords}


"""

model=genai.GenerativeModel("gemini-pro") 
chat = model.start_chat(history=[])

def get_gemini_response(skill, keywords):
    formatted_prompt = PROMPT_TEMPLATE.format(skill=skill, keywords=', '.join(keywords))
    response=chat.send_message(formatted_prompt,stream=False)
    return response

input_data = input("Input (comma-separated skill and keywords): ")
skill, *keywords = input_data.split(",")

if input_data:
    response=get_gemini_response(skill, keywords)
    print("\nGenerated Questions:\n")
    for resp in response:
        print(resp.text)
else:
    print("No input provided.")