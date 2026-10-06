import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

function SkillGap() {
  const gaps = [
    {
      skill: 'Deep Learning',
      priority: 'High',
      current: 45,
      target: 80,
      recommendation: 'Learn neural networks, CNNs and model training.',
    },
    {
      skill: 'NLP',
      priority: 'High',
      current: 38,
      target: 75,
      recommendation: 'Build fundamentals of text processing and NLP models.',
    },
    {
      skill: 'Cloud Computing',
      priority: 'Medium',
      current: 52,
      target: 70,
      recommendation: 'Learn cloud deployment and basic AWS services.',
    },
  ]

  return (
    <div className="skill-gap-page">

      <div className="page-header">
        <div>
          <p className="page-label">SKILL GAP INTELLIGENCE</p>
          <h1>Skills to Improve</h1>
          <p>
            Identify the skills you need to strengthen for your target career.
          </p>
        </div>

        <Button>Explore Career</Button>
      </div>

      <div className="gap-summary">

        <div className="gap-summary-card">
          <span>Target Career</span>
          <strong>Data Scientist</strong>
        </div>

        <div className="gap-summary-card">
          <span>Skills to Improve</span>
          <strong>3</strong>
        </div>

        <div className="gap-summary-card">
          <span>Current Readiness</span>
          <strong>72%</strong>
        </div>

      </div>

      <div className="section-heading">
        <p className="page-label">PRIORITY AREAS</p>
        <h2>Your Skill Gaps</h2>
      </div>

      <div className="gap-list">

        {gaps.map((gap) => (
          <div className="gap-detail-card" key={gap.skill}>

            <div className="gap-detail-header">

              <div>
                <h3>{gap.skill}</h3>

                <span className={`priority ${gap.priority.toLowerCase()}`}>
                  {gap.priority} Priority
                </span>
              </div>

              <strong>
                {gap.current}%
                <span> / {gap.target}%</span>
              </strong>

            </div>

            <ProgressBar
              label="Current Level"
              value={gap.current}
            />

            <div className="target-level">
              Target Level: {gap.target}%
            </div>

            <p className="gap-recommendation">
              <strong>Recommendation:</strong> {gap.recommendation}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default SkillGap