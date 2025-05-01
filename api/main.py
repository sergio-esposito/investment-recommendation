from fastapi import FastAPI
from recommender import get_recommendation

app = FastAPI()

@app.get("/recommend")
def recommend(profile: str = "moderado"):
    return get_recommendation(profile)
