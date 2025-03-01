from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pyjokes
app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins 
    # allow_origins=["http://localhost:5173"], # only from react allowed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    j = pyjokes.get_joke()
    return {"message": j}