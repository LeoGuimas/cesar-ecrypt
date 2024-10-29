from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configurar CORS
origins = [
    "http://localhost:4200",  # URL do frontend Angular
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CipherText(BaseModel):
    text: str
    shift: int

def caesar_cipher(text: str, shift: int) -> str:
    result = ""
    for char in text:
        if char.isalpha():
            shift_base = 65 if char.isupper() else 97
            result += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            result += char
    return result

@app.post("/api/encrypt")
async def encrypt(data: CipherText):
    return {"encrypted_text": caesar_cipher(data.text, data.shift)}

@app.post("/api/decrypt")
async def decrypt(data: CipherText):
    return {"decrypted_text": caesar_cipher(data.text, -data.shift)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))