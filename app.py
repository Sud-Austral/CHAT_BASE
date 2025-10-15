from flask import Flask, request, jsonify
from flask_cors import CORS  # Importar CORS
import os
import json
import numpy as np
from ctransformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained(
    r"C:\Users\Administrador\Downloads\mistral-7b-instruct-v0.1.Q2_K.gguf",
    model_type="llama",
    gpu_layers=0  # 0 para CPU, aumenta si tienes GPU
)

# Probar el modelo
prompt = "Hola, ¿cómo estás?"
response = model(prompt, max_new_tokens=1000)

#python autorestart.py
#chmod +x generate_fullchain.sh
#./generate_fullchain.sh

#from crime_data_system.crime_data_query_system import CrimeDataQuerySystem

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas y orígenes

print("Version 52")





@app.route('/')
def home():
    return jsonify({"message": "Bienvenido a la API de Datos de Crimen"})

@app.route('/query/')
def answer_query():
    query = request.args.get('query', '')
    try:
        response = model(query, max_new_tokens=1000)
        return jsonify({"response": response})
    except:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    cert_path = os.path.abspath("fullchain.pem")
    key_path = os.path.abspath("private.key")
    app.run(host='0.0.0.0', port=8000, ssl_context=(cert_path, key_path))