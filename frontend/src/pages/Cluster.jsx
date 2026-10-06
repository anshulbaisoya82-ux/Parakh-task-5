import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

function Cluster() {
  const careers = [
    'Data Scientist',
    'Machine Learning Engineer',
    'Data Analyst',
    'AI Engineer',
  ]

  return (
    <div className="cluster-page">

      <div className="page-header">
        <div>
          <p className="page-label">STUDENT CLUSTER</p>
          <h1>My Cluster</h1>
          <p>
            Understand how your skill pattern compares with similar students.
          </p>
        </div>
      </div>

      <div className="cluster-main-card">

        <div className="cluster-icon">
          C2
        </div>

        <div className="cluster-main-info">
          <p className="card-label">YOUR CLUSTER</p>
          <h2>Data & ML Oriented</h2>
          <p>
            You belong to a group of students with strong interest
            and skills in data, programming and machine learning.
          </p>
        </div>

        <div className="cluster-score">
          <strong>84%</strong>
          <span>Similarity</span>
        </div>

      </div>

      <div className="cluster-stats">

        <div className="cluster-stat-card">
          <span>Cluster</span>
          <strong>2</strong>
        </div>

        <div className="cluster-stat-card">
          <span>Students in Cluster</span>
          <strong>32</strong>
        </div>

        <div className="cluster-stat-card">
          <span>Skill Similarity</span>
          <strong>84%</strong>
        </div>

      </div>

      <div className="cluster-grid">

        <div className="cluster-card">

          <div className="section-heading">
            <p className="page-label">CLUSTER PROFILE</p>
            <h2>Skill Pattern</h2>
          </div>

          <ProgressBar
            label="Programming"
            value={82}
          />

          <ProgressBar
            label="Data Skills"
            value={78}
          />

          <ProgressBar
            label="Machine Learning"
            value={72}
          />

          <ProgressBar
            label="Web Development"
            value={54}
          />

        </div>

        <div className="cluster-card">

          <div className="section-heading">
            <p className="page-label">CAREER DIRECTIONS</p>
            <h2>Common Careers</h2>
          </div>

          <div className="cluster-careers">

            {careers.map((career, index) => (
              <div className="cluster-career" key={career}>
                <span>{index + 1}</span>
                <p>{career}</p>
              </div>
            ))}

          </div>

          <Button>Explore Careers</Button>

        </div>

      </div>

    </div>
  )
}

export default Cluster