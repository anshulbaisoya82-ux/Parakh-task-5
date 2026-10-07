import { useState } from 'react'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'

function CareerPrediction() {
  const [prediction, setPrediction] = useState(null)

  const handlePrediction = () => {
    // Temporary result; backend will replace this later
    setPrediction({
      career: 'Data Scientist',
      score: 86,
      alternatives: [
        { name: 'ML Engineer', score: 78 },
        { name: 'Data Analyst', score: 74 },
        { name: 'AI Engineer', score: 70 },
      ],
    })
  }

  return (
    <div className="career-page">

      <div className="page-header">
        <div>
          <p className="page-label">CAREER PREDICTION</p>
          <h1>Career Prediction</h1>
          <p>Discover careers that match your current skills.</p>
        </div>
      </div>

      <div className="profile-card prediction-action-card">

        <div>
          <h2>Ready to predict your career?</h2>
          <p>
            Our model will analyse your profile and identify suitable
            career paths.
          </p>
        </div>

        <Button onClick={handlePrediction}>
          Predict My Career
        </Button>

      </div>

      {prediction && (
        <div className="prediction-result">

          <div className="profile-card primary-prediction">

            <div>
              <p className="page-label">PRIMARY CAREER</p>
              <h2>{prediction.career}</h2>
              <p>Your current profile shows a strong match with this career.</p>
            </div>

            <div className="prediction-score">
              <strong>{prediction.score}%</strong>
              <span>Career Match</span>
            </div>

          </div>

          <div className="profile-card">

            <div className="section-heading">
              <p className="page-label">ALTERNATIVE CAREERS</p>
              <h2>Other Suitable Careers</h2>
            </div>

            <div className="career-list">

              {prediction.alternatives.map((career) => (
                <div className="career-item" key={career.name}>

                  <div>
                    <h3>{career.name}</h3>
                    <p>Based on your current skill profile.</p>
                  </div>

                  <div className="career-progress">
                    <ProgressBar
                      label="Match"
                      value={career.score}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default CareerPrediction