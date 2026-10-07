import os
from typing import Any, Dict, List, Optional, Union

import joblib
import numpy as np
import pandas as pd
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# ---------------------------------------------------------
# 1. Initialize FastAPI Application
# ---------------------------------------------------------
app = FastAPI(
    title="PARAKH AI - Career & Skill Intelligence API",
    description="Inference service for Career Prediction and Student Clustering",
    version="1.0.0",
)

# Enable CORS so Frontend and Backend can call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# 2. Define Model Configurations & Columns
# ---------------------------------------------------------
# Exact 32 skill columns fitted during training
SKILL_COLUMNS = [
    "python", "java", "c_cpp", "javascript", "typescript", "html_css",
    "react", "angular_vue", "nodejs", "fastapi_flask", "django", "sql",
    "nosql", "mongodb", "postgresql", "pandas_numpy", "scikit_learn",
    "deep_learning", "pytorch_tensorflow", "nlp", "computer_vision",
    "docker", "kubernetes", "git", "linux", "aws", "azure_gcp",
    "ci_cd", "terraform", "cybersecurity_basics", "penetration_testing",
    "flutter_react_native"
]

# Human-readable cluster names based on K-Means profiles
CLUSTER_NAMES = {
    0: "Web & Full-Stack Development",
    1: "Data Science, AI & Cloud Engineering"
}

# ---------------------------------------------------------
# 3. Load Trained Artifacts
# ---------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def load_artifact(filename: str):
    path = os.path.join(BASE_DIR, filename)
    if not os.path.exists(path):
        raise FileNotFoundError(f"Missing required model artifact: {path}")
    return joblib.load(path)

try:
    scaler = load_artifact("standard_scaler.pkl")
    pca = load_artifact("pca.pkl")
    supervised_model = load_artifact("supervised_model.pkl")
    kmeans_model = load_artifact("kmeans_model.pkl")
    print("All ML artifacts loaded successfully.")
except Exception as e:
    print(f"Error loading model artifacts: {e}")
    scaler = None
    pca = None
    supervised_model = None
    kmeans_model = None

# ---------------------------------------------------------
# 4. Request & Response Schemas
# ---------------------------------------------------------
class CareerPredictRequest(BaseModel):
    experience_years: Optional[float] = 0.0
    skills: Union[Dict[str, Any], List[str]]

class CareerPredictResponse(BaseModel):
    career: str
    confidence: float

class ClusterRequest(BaseModel):
    skills: Union[Dict[str, Any], List[str]]

class ClusterResponse(BaseModel):
    cluster: int
    cluster_name: str

# ---------------------------------------------------------
# 5. Helper Functions
# ---------------------------------------------------------
def prepare_skill_dataframe(skills_input: Union[Dict[str, Any], List[str]]) -> pd.DataFrame:
    """
    Converts incoming skills (dictionary of flags or list of skill names)
    into a single-row DataFrame with the 32 training columns.
    """
    row = {}

    if isinstance(skills_input, dict):
        for col in SKILL_COLUMNS:
            val = skills_input.get(col, 0)
            row[col] = 1 if val in [1, True, "1", "true"] else 0

    elif isinstance(skills_input, list):
        # Format string names to match column tokens (e.g. 'c/cpp' -> 'c_cpp')
        normalized_skills = {
            str(s).strip().lower().replace(" ", "_").replace("/", "_").replace("-", "_")
            for s in skills_input
        }
        for col in SKILL_COLUMNS:
            row[col] = 1 if col in normalized_skills else 0

    else:
        for col in SKILL_COLUMNS:
            row[col] = 0

    return pd.DataFrame([row], columns=SKILL_COLUMNS)

# ---------------------------------------------------------
# 6. API Endpoints
# ---------------------------------------------------------
@app.get("/")
def health_check():
    """Health check endpoint to test if the service is running."""
    return {
        "status": "healthy",
        "service": "PARAKH ML Inference Service",
        "docs_url": "/docs"
    }

@app.post("/predict-career", response_model=CareerPredictResponse)
@app.post("/predict", response_model=CareerPredictResponse)
def predict_career(payload: CareerPredictRequest):
    """
    Predicts the best-matching career based on student skills.
    Pipeline: 32 Skills -> StandardScaler -> PCA (29 components) -> RandomForest
    """
    if supervised_model is None or pca is None or scaler is None:
        raise HTTPException(status_code=500, detail="Models are not properly loaded.")

    try:
        # 1. Transform raw skills into 32 binary features
        df_skills = prepare_skill_dataframe(payload.skills)

        # 2. Scale features using the fitted StandardScaler
        scaled_skills = scaler.transform(df_skills)

        # 3. Apply PCA transformation
        pca_skills = pca.transform(scaled_skills)

        # 4. Predict career category
        predicted_career = supervised_model.predict(pca_skills)[0]

        # 5. Calculate prediction confidence using probabilities
        probabilities = supervised_model.predict_proba(pca_skills)[0]
        confidence = float(np.max(probabilities))

        return CareerPredictResponse(
            career=str(predicted_career),
            confidence=round(confidence, 2)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

@app.post("/cluster-student", response_model=ClusterResponse)
@app.post("/cluster", response_model=ClusterResponse)
def cluster_student(payload: ClusterRequest):
    """
    Assigns the student to a skill cluster using K-Means.
    Pipeline: 32 Skills -> StandardScaler -> KMeans (k=2)
    """
    if kmeans_model is None or scaler is None:
        raise HTTPException(status_code=500, detail="Clustering model is not properly loaded.")

    try:
        # 1. Transform raw skills into 32 binary features
        df_skills = prepare_skill_dataframe(payload.skills)

        # 2. Scale features
        scaled_skills = scaler.transform(df_skills)

        # 3. Predict cluster
        cluster_id = int(kmeans_model.predict(scaled_skills)[0])
        cluster_name = CLUSTER_NAMES.get(cluster_id, f"Cluster {cluster_id}")

        return ClusterResponse(
            cluster=cluster_id,
            cluster_name=cluster_name
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Clustering error: {str(e)}")

# ---------------------------------------------------------
# 7. Local Run Entrypoint
# ---------------------------------------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    print(f"Starting server on http://127.0.0.1:{port}")
    uvicorn.run("api:app", host="0.0.0.0", port=port, reload=True)
