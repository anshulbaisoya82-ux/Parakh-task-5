import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">

      <section className="page-header">
        <div>
          <p className="page-label">OVERVIEW</p>
          <h1>Welcome back, Lavkush</h1>
          <p>Here's your career progress at a glance.</p>
        </div>

        <Button onClick={() => navigate('/profile')}>
          View Profile
        </Button>
      </section>

      <section className="stats-grid">
        <Card
          title="Primary Career"
          value="Data Scientist"
          description="86% career match"
        />

        <Card
          title="Overall Skill Score"
          value="72%"
          description="5 of 8 core skills developed"
        />

        <Card
          title="Core Competencies"
          value="5"
          description="Strong technical skills"
        />

        <Card
          title="My Cluster"
          value="Data & ML"
          description="84% similarity"
        />
      </section>

      <div className="home-content-grid">

        <div className="career-highlight-card">

          <div className="career-highlight-content">
            <p className="card-label">PRIMARY CAREER FIT</p>

            <h2>Data Scientist</h2>

            <p className="card-description">
              Your current skills show a strong compatibility with
              Data Science and Machine Learning roles.
            </p>

            <div className="career-progress-list">
              <ProgressBar
                label="Skill Compatibility"
                value={86}
              />

              <ProgressBar
                label="Career Readiness"
                value={72}
              />
            </div>

            <Button onClick={() => navigate('/career')}>
              View Career Prediction
            </Button>
          </div>

          <div className="career-match-circle">
            <span>Career Match</span>
            <strong>86%</strong>
            <small>Excellent fit</small>
          </div>

        </div>

        <div className="skill-gap-highlight-card">

          <div className="card-top">
            <div>
              <p className="card-label">HIGH PRIORITY SKILL GAPS</p>
              <h2>Skills to Improve</h2>
            </div>

            <span className="gap-count">3</span>
          </div>

          <p className="card-description">
            These skills can improve your readiness for your target career.
          </p>

          <div className="skill-gap-list">

            <div className="skill-gap-row">
              <div>
                <strong>Deep Learning</strong>
                <span>High Priority</span>
              </div>
              <b>45%</b>
            </div>

            <div className="skill-gap-row">
              <div>
                <strong>NLP</strong>
                <span>High Priority</span>
              </div>
              <b>38%</b>
            </div>

            <div className="skill-gap-row">
              <div>
                <strong>Cloud Computing</strong>
                <span>Medium Priority</span>
              </div>
              <b>52%</b>
            </div>

          </div>

          <Button onClick={() => navigate('/skill-gap')}>
            View Skill Gap
          </Button>

        </div>

      </div>

      <section className="skills-highlight-card">

        <div className="section-heading">
          <p className="page-label">CURRENT SKILLS</p>
          <h2>Your Skill Profile</h2>
        </div>

        <div className="skills-profile-grid">

          <div className="skill-profile-item">
            <div>
              <strong>Python</strong>
              <span>Programming</span>
            </div>
            <b>88%</b>
          </div>

          <div className="skill-profile-item">
            <div>
              <strong>SQL</strong>
              <span>Data</span>
            </div>
            <b>76%</b>
          </div>

          <div className="skill-profile-item">
            <div>
              <strong>Machine Learning</strong>
              <span>AI / ML</span>
            </div>
            <b>72%</b>
          </div>

          <div className="skill-profile-item">
            <div>
              <strong>Statistics</strong>
              <span>Data</span>
            </div>
            <b>70%</b>
          </div>

          <div className="skill-profile-item">
            <div>
              <strong>JavaScript</strong>
              <span>Programming</span>
            </div>
            <b>68%</b>
          </div>

          <div className="skill-profile-item">
            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>
            <b>64%</b>
          </div>

        </div>

        <ProgressBar
          label="Overall Skill Progress"
          value={72}
        />

      </section>

    </div>
  )
}

export default Home