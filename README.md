# PARAKH AI – Career Intelligence System

PARAKH AI is a machine learning project that helps students explore career options based on the technical skills they currently have. It predicts a suitable career track, groups students with similar skill sets, and shows which skills they may need to learn for a selected role.

This is our second-year project, so the main focus is on building a working ML service and understanding how the different parts fit together. The result is meant to support career decisions, not to guarantee that someone will get a particular job.

## What does it do?

- **Career prediction:** Predicts one suitable career track from a student's technical skills.
- **Student clustering:** Uses K-Means to group similar skill profiles.
- **Skill gap analysis:** Compares a student's skills with the skills mapped to a chosen career and lists what is missing.
- **Match score:** Shows a simple percentage based on how many required skills the student already has.
- **API:** Makes the models available through a FastAPI service, so a frontend can use them.

The current model covers 12 career tracks, including Data Analyst, Data Scientist, AI Engineer, Backend Developer, Frontend Developer, DevOps Engineer, Cybersecurity Analyst, and Mobile App Developer.

## How it works

1. A student submits their skills.
2. The API checks the input and arranges the skills in the format expected by the models.
3. The career prediction model predicts a career track.
4. The clustering model assigns the profile to a skill group.
5. The skill-gap logic compares the student's skills with the requirements for the selected career.
6. The API returns the results for the application to display.

For example, a student who knows HTML, CSS, JavaScript, and Git may receive a Frontend Developer prediction or explore that role's skill gap. The result depends on the trained model and the skills provided.

## Machine learning used

### Career prediction

We trained and compared different classification algorithms, including Decision Tree, Random Forest, and Logistic Regression. The current saved career model is a tuned Random Forest classifier.

The reported test accuracy for this model is **86.07%** on the project's evaluation split. This score describes performance on that dataset; it does not mean every prediction will be correct for every student.

### Student clustering

K-Means is used to group students with similar technical skill patterns. The cluster label can help describe a general area, such as web development or data/AI-related skills. These groups are patterns in the data, not fixed labels for a student's ability.

### Skill gap analysis

The skill-gap feature uses a role-to-skill mapping. It checks which required skills are already present and which are missing.

The match score is calculated as:

`(number of required skills the student has / total required skills for the role) * 100`

This is a simple project-level readiness indicator, not an official industry score.

## Dataset

The project uses a prepared dataset containing **1,399 student profiles** and **44 columns**, including 32 technical skill features and other profile/scoring fields. The prediction and clustering models use the 32 skill features.

The skills cover areas such as:
- Programming: Python, Java, C/C++, JavaScript, TypeScript
- Web development: HTML/CSS, React, Node.js, Django, FastAPI/Flask
- Databases: SQL, MongoDB, PostgreSQL, NoSQL
- Data and AI: Pandas/NumPy, Scikit-learn, Deep Learning, NLP, Computer Vision
- Cloud and DevOps: Docker, Kubernetes, Linux, AWS, Azure/GCP, CI/CD
- Security and mobile: Cybersecurity basics, penetration testing, Flutter/React Native

## Tech stack

- **Python** – main programming language
- **Pandas and NumPy** – data handling
- **Scikit-learn** – machine learning models and preprocessing
- **FastAPI** – REST API
- **Uvicorn** – local API server
- **Pydantic** – request validation
- **Jupyter Notebook** – experiments and model training

## Project structure

The files may vary slightly depending on the version of the repository, but the main files used in this task are:

```text
Parakh-task-5/
├── api.py
├── cleaned_dataset.pkl
├── standard_scaler.pkl
├── supervised_model.pkl
├── kmeans_model.pkl
├── Parakh.ipynb
├── PCA_Scaler.ipynb
├── model_training/
│   ├── supervised.ipynb
│   ├── unsupervised.ipynb
│   └── skill_gap_analysis.ipynb
└── README.md
```

- `api.py` runs the API and loads the saved models.
- `cleaned_dataset.pkl` contains the prepared dataset.
- `standard_scaler.pkl` stores the fitted scaler used for skill features.
- `supervised_model.pkl` is the trained career classifier.
- `kmeans_model.pkl` is the saved clustering model.
- `model_training/` contains notebooks used for model experiments and analysis.

## Setup and run locally

### Requirements

- Python 3.10, 3.11, or 3.12
- pip

### 1. Clone the repository

```bash
git clone https://github.com/anshulbaisoya82-ux/Parakh-task-5.git
cd Parakh-task-5
```

### 2. Create a virtual environment

**Windows (PowerShell)**

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**Linux / macOS**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install the packages

```bash
pip install fastapi uvicorn scikit-learn pandas numpy joblib pydantic
```

### 4. Start the API

```bash
python api.py
```

Or run it with Uvicorn:

```bash
uvicorn api:app --host 127.0.0.1 --port 8000 --reload
```

Once it starts, open:

- API root: http://127.0.0.1:8000/
- Swagger documentation: http://127.0.0.1:8000/docs
- ReDoc documentation: http://127.0.0.1:8000/redoc

## API endpoints

The API currently provides these main endpoints. You can open `/docs` to check the exact request and response schemas in the running version.

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/` | Check whether the service is running |
| `POST` | `/predict-career` | Predict a career from the submitted skills |
| `POST` | `/cluster-student` | Assign the skill profile to a cluster |
| `POST` | `/skill-gap` | Compare skills with a selected career |

### Example: career prediction

Send a `POST` request to `/predict-career` with a JSON body like this:

```json
{
  "skills": {
    "python": 1,
    "sql": 1,
    "pandas_numpy": 1,
    "scikit_learn": 1,
    "git": 1
  }
}
```

Skills use `1` to indicate that the student has a skill and `0` to indicate that they do not. Skills left out of the request default to `0` in the current API implementation.

A response may look like this:

```json
{
  "career": "Data Scientist",
  "confidence": 0.84
}
```

This is only an example of the response format; the actual output depends on the model and input.

## Notes and limitations

- The model can only predict among the career categories it was trained on.
- The quality of the result depends on the dataset and how accurately the skills are entered.
- A high match score only means that more skills from the project's role mapping are present. It does not measure real-world job readiness by itself.
- The saved `.pkl` files should be used with a compatible Scikit-learn version. The project models were saved with Scikit-learn 1.7.2, so using that version is a good starting point.
- This repository currently focuses on the ML and API part. A full React dashboard and MongoDB integration are part of the wider project plan and should only be described as implemented if they are present in the code.

## Future improvements

Some things we can add in later versions:
- Connect the API to a frontend dashboard.
- Save student profiles and previous results in a database.
- Add resume parsing to extract skills from uploaded resumes.
- Improve recommendations with course and project suggestions.
- Use updated career and job-market data.

## Team

**Team PARAKH**

This project is being developed as a student project to learn about data preprocessing, model training, evaluation, and deploying machine learning models through an API.

---

*Career predictions and skill-gap results are suggestions for exploration and learning, not guaranteed career outcomes.*
