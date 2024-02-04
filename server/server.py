from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import json
import google.generativeai as genai
from langchain_community.document_loaders import PyPDFLoader
from typing import Dict
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores.faiss import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate

app = Flask(__name__)
CORS(app)
load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

PROMPT_TEMPLATE = """Create ten multiple choice questions about the given skill and keyword list. Use these details to create the most accurate and engaging questions possible. Each question should be well thought out and have four distinct options. Ensure that one option stands out as clearly correct, while the others may be partially true but still incorrect. Do NOT reveal the answers immediately; wait until they are requested. Begin creating questions now.

Skill Name: {skill}
Keywords: {keywords}

i want the response in one single string
{{"questions":[<Questions with options in quotes and separated with commas>]}}
"""

ANSWER_PROMPT = """
You are a skilled quiz assesser. The input contains both questions and the users answers, you must interpret it correctly and correct the answers provided by the user, and give total marks out of 10. Correct upto your best knowledge, do not give wrong answers. 

input: {user_input}

I want the response in one single string having the structure without any "\"
{{"correctOptions":"[]", "total_score":"<only number>"}}"""

INPUT_PROMPT = """
Hey Act Like a skilled or very experienced ATS (Application Tracking System)
with a deep understanding of tech fields such as software engineering, data science,
data analysis, and Big Data Engineering. Your task is to evaluate the resume based on
the given job description. You must consider the job market is highly competitive and
you should provide best assistance for improving resumes. Assign the percentage matching
based on JD and the missing keywords with high accuracy.

Resume Text: {text}
Job Description: {description}

I want the response in one single string having the following structure:
{{\"JD Match\":\"\", \"MissingKeywords\":[], \"What Can Be Improved?\":\"\"}}
"""

def get_gemini_response(input_string):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(input_string).text
    return response

@app.route("/grade_quiz", methods=["POST"])
def grade():
    data = request.get_json()
    if "input" not in data:
        return jsonify({"msg": "Both 'skill' and 'keywords' keys are mandatory."}), 400

    user_input = str(data["input"]).strip()
    response = get_gemini_response(ANSWER_PROMPT.format(user_input = user_input))
    parsed_response = json.loads(response)  # Parse the response string into a dictionary
    output_dict = {"correctOptions": parsed_response["correctOptions"], "total_score": parsed_response["total_score"]}
    return jsonify(output_dict), 200  # Convert the dictionary back into a JSON string



@app.route("/create_questions", methods=["POST"])
def create_questions():
    if not request.is_json:
        return jsonify({"msg": "Request body must be JSON."}), 400

    data = request.get_json()

    if "skill" not in data or "keywords" not in data:
        return jsonify({"msg": "Both 'skill' and 'keywords' keys are mandatory."}), 400

    try:
        skill = str(data["skill"]).strip()
        keywords = str(data["keywords"]).strip().replace(" ", "").split(",")
    except Exception as e:
        return jsonify({"msg": f"Error processing input parameters: {str(e)}"}), 500

    response = get_gemini_response(PROMPT_TEMPLATE.format(skill=skill, keywords=", ".join(keywords)))
    # generated_questions = [q.strip() for q in response.split('\n')[:-1]]

    return jsonify({"questions": response}), 200

@app.route("/at_system", methods=["POST"])
def at_system():
    if not request.is_json:
        return jsonify({"msg": "Request body must be JSON."}), 400

    data = request.get_json()

    if "job_description" not in data or "pdf_path" not in data:
        return jsonify({"msg": "'job_description' and 'pdf_path' keys are mandatory."}), 400

    try:
        jd = str(data["job_description"]).strip()
        pdf_path = str(data["pdf_path"]).strip()
    except Exception as e:
        return jsonify({"msg": f"Error processing input parameters: {str(e)}"}), 500

    loader = PyPDFLoader(pdf_path)
    pages = loader.load_and_split()

    response = get_gemini_response(INPUT_PROMPT.format(
                            text=pages[0].page_content,
                            description=jd))

    parsed_response = eval(response)
    return jsonify(parsed_response), 200

def get_conversational_chain():
    PROMPT_TEMPLATE = """
    Answer the question as detailed as possible from the provided context and also from your own knowledge,don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n
    
    I want the response in one single string having the structure
    {{"skill":"<Comma separated skills>","keywords":"<Comma separated keywords>, "gpa":"<extract gpa score only single digit, if not present return N/A>", "gradYear":"<extract year of graduation/expected year of graduation. only give the year>"}}
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                                   temperature=0.3, google_api_key=os.getenv("GOOGLE_API_KEY"))

    prompt = PromptTemplate(template=PROMPT_TEMPLATE, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain

@app.route('/resume_skills', methods=['POST'])
def resume_skills():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    f = request.files['file']

    if f.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the file locally
    file_path = f.filename
    f.save(file_path)

    loader = PyPDFLoader(file_path)
    pages = loader.load_and_split()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(pages[0].page_content)

    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=os.getenv("GOOGLE_API_KEY"))
    vector_store = FAISS.from_texts(chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

    def user_input(user_question: str) -> dict:
        new_db = FAISS.load_local("faiss_index", embeddings)
        docs = new_db.similarity_search(user_question)

        chain = get_conversational_chain()

        response = chain(
            {"input_documents": docs, "question": user_question},
            return_only_outputs=True
        )
    
        return response

    response = user_input("What info does the resume state?")

    # Extract relevant information from the response
    formatted_response = {}
    if 'output_text' in response:
        formatted_response = json.loads(response['output_text'].replace('\\"', '"'))

    return jsonify({'response': formatted_response, 'pdf': str(pages)}), 200
if __name__ == "__main__":
    app.run(debug=True)