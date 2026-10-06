import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

function CareerPrediction() {
  const careers = [
    {
      name: 'Machine Learning Engineer',
      match: 78,
    },
    {
      name: 'Data Analyst',
      match: 74,
    },
    {
      name: 'AI Engineer',
      match: 69,
    },
  ]

  return (
    <div className="career-page">

      <div className="page-header">
        <div>
          <p className="page-label">CAREER INTELLIGENCE</p>
          <h1>Career Prediction</h1>
          <p>
            Explore careers that best match your current skills and profile.
          </p>
        </div>

        <Button>Analyze Profile</Button>
      </div>

      <div className="career-primary-card">

        <div>
          <p className="card-label">TOP CAREER MATCH</p>
          <h2>Data Scientist</h2>

          <p className="career-description">
            Your profile shows strong compatibility with Data Science,
            Machine Learning and analytical roles.
          </p>
        </div>

        <div className="career-score">
          <strong>86%</strong>
          <span>Match</span>
        </div>

      </div>

      <div className="career-section">

        <div className="section-heading">
          <p className="page-label">ALTERNATIVE CAREERS</p>
          <h2>Other Strong Matches</h2>
        </div>

        <div className="career-list">

          {careers.map((career) => (
            <div className="career-item" key={career.name}>

              <div>
                <h3>{career.name}</h3>
                <p>
                  Based on your current skills and career profile.
                </p>
              </div>

              <div className="career-progress">
                <ProgressBar
                  label="Match"
                  value={career.match}
                />
              </div>

            </div>
          ))}

        </div>
      </div>

      <div className="career-insight-card">

        <div>
          <p className="card-label">CAREER INSIGHT</p>
          <h2>Data & ML Oriented</h2>

          <p>
            Your strongest career direction is currently around
            Data Science and Machine Learning.
          </p>
        </div>

        <Button>View Skill Gap</Button>

      </div>

    </div>
  )
}

export default CareerPrediction