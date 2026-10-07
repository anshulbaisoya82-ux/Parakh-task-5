import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'

function Dashboard() {
  const careers = [
    { name: 'Data Scientist', score: 86 },
    { name: 'ML Engineer', score: 78 },
    { name: 'Data Analyst', score: 74 },
    { name: 'AI Engineer', score: 70 },
  ]

  const skills = [
    { name: 'Python', score: 88 },
    { name: 'SQL', score: 76 },
    { name: 'Machine Learning', score: 72 },
    { name: 'Statistics', score: 70 },
  ]

  return (
    <div className="dashboard-page">

      <div className="page-header dashboard-header">
        <div>
          <p className="page-label">DASHBOARD</p>
          <h1>Career Intelligence Dashboard</h1>
          <p>
            Track your career predictions, skills and improvement areas
            in one place.
          </p>
        </div>

        <div className="dashboard-status">
          <span className="status-dot"></span>
          Analysis Ready
        </div>
      </div>

      <div className="stats-grid dashboard-stats">

        <Card
          title="Primary Career"
          value="Data Scientist"
          description="86% career match"
        />

        <Card
          title="Overall Skill Score"
          value="72%"
          description="Current skill strength"
        />

        <Card
          title="Skill Gaps"
          value="3"
          description="Skills to improve"
        />

        <Card
          title="My Cluster"
          value="Data & ML"
          description="84% similarity"
        />

      </div>

      <div className="dashboard-grid">

        <div className="profile-card dashboard-panel">

          <div className="section-heading">
            <div>
              <p className="page-label">CAREER MATCHES</p>
              <h2>Career Prediction</h2>
            </div>

            <span className="panel-badge">Top Matches</span>
          </div>

          <div className="dashboard-careers">

            {careers.map((career, index) => (
              <div className="dashboard-career" key={career.name}>

                <div className="dashboard-career-top">

                  <div className="career-name">
                    <span className="career-rank">
                      {index + 1}
                    </span>

                    <strong>{career.name}</strong>
                  </div>

                  <span className="career-score">
                    {career.score}%
                  </span>

                </div>

                <div className="dashboard-progress">
                  <ProgressBar
                    label=""
                    value={career.score}
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="profile-card dashboard-panel">

          <div className="section-heading">
            <div>
              <p className="page-label">SKILL PROFILE</p>
              <h2>Top Skills</h2>
            </div>

            <span className="panel-badge">Strong Areas</span>
          </div>

          <div className="dashboard-skills">

            {skills.map((skill) => (
              <div className="dashboard-skill" key={skill.name}>

                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.score}%</span>
                </div>

                <div className="dashboard-progress">
                  <ProgressBar
                    label=""
                    value={skill.score}
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="profile-card dashboard-recommendation">

        <div className="recommendation-icon">
          →
        </div>

        <div>
          <p className="page-label">RECOMMENDED NEXT STEP</p>
          <h2>Focus on your skill gaps</h2>

          <p>
            Improving Deep Learning, NLP and Cloud Computing can
            strengthen your readiness for Data Science roles.
          </p>
        </div>

        <div className="recommendation-score">
          <span>3</span>
          <small>Priority Skills</small>
        </div>

      </div>

    </div>
  )
}

export default Dashboard