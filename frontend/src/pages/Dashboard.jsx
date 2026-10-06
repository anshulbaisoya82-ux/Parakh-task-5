import ProgressBar from '../components/ProgressBar'
import SkillBadge from '../components/SkillBadge'

function Dashboard() {
  const recommendations = [
    'Strengthen Deep Learning fundamentals',
    'Learn NLP and text processing',
    'Build a Machine Learning project',
  ]

  return (
    <div className="dashboard-page">

      <div className="page-header">
        <div>
          <p className="page-label">CAREER DASHBOARD</p>
          <h1>Your Career Intelligence</h1>
          <p>
            A complete overview of your career readiness and progress.
          </p>
        </div>
      </div>

      <div className="dashboard-stats">

        <div className="dashboard-stat">
          <span>Top Career</span>
          <strong>Data Scientist</strong>
          <small>86% match</small>
        </div>

        <div className="dashboard-stat">
          <span>Skill Score</span>
          <strong>72%</strong>
          <small>Good foundation</small>
        </div>

        <div className="dashboard-stat">
          <span>Skill Gaps</span>
          <strong>3</strong>
          <small>Areas to improve</small>
        </div>

        <div className="dashboard-stat">
          <span>Cluster</span>
          <strong>Data & ML</strong>
          <small>84% similarity</small>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <div className="section-heading">
            <p className="page-label">CAREER FIT</p>
            <h2>Primary Career</h2>
          </div>

          <div className="dashboard-career">
            <div>
              <h3>Data Scientist</h3>
              <p>Strong match with your current profile.</p>
            </div>

            <strong>86%</strong>
          </div>

          <ProgressBar
            label="Career Match"
            value={86}
          />

        </div>

        <div className="dashboard-card">

          <div className="section-heading">
            <p className="page-label">SKILL PROFILE</p>
            <h2>Current Skills</h2>
          </div>

          <div className="skill-badges">
            <SkillBadge skill="Python" />
            <SkillBadge skill="SQL" />
            <SkillBadge skill="Pandas" />
            <SkillBadge skill="Machine Learning" />
            <SkillBadge skill="Statistics" />
          </div>

          <ProgressBar
            label="Overall Skill Score"
            value={72}
          />

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <div className="section-heading">
            <p className="page-label">NEXT STEPS</p>
            <h2>Recommendations</h2>
          </div>

          <div className="recommendation-list">

            {recommendations.map((recommendation, index) => (
              <div
                className="recommendation-item"
                key={recommendation}
              >
                <span>{index + 1}</span>
                <p>{recommendation}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="dashboard-card">

          <div className="section-heading">
            <p className="page-label">READINESS</p>
            <h2>Career Progress</h2>
          </div>

          <ProgressBar
            label="Overall Readiness"
            value={72}
          />

          <ProgressBar
            label="Career Compatibility"
            value={86}
          />

          <ProgressBar
            label="Skill Development"
            value={72}
          />

        </div>

      </div>

    </div>
  )
}

export default Dashboard