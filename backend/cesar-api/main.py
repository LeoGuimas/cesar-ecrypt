from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

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

@app.post("/encrypt")
async def encrypt(data: CipherText):
    return {"encrypted_text": caesar_cipher(data.text, data.shift)}

@app.post("/decrypt")
async def decrypt(data: CipherText):
    return {"decrypted_text": caesar_cipher(data.text, -data.shift)}

