import ProgressBar from '../components/ProgressBar'

function SkillAnalysis() {
  const skills = [
    { name: 'Python', score: 88, category: 'Programming' },
    { name: 'SQL', score: 76, category: 'Data' },
    { name: 'Machine Learning', score: 72, category: 'AI / ML' },
    { name: 'Statistics', score: 70, category: 'Data' },
    { name: 'JavaScript', score: 68, category: 'Programming' },
    { name: 'React', score: 64, category: 'Frontend' },
  ]

  return (
    <div className="skills-page">

      <div className="page-header">
        <div>
          <p className="page-label">SKILL INTELLIGENCE</p>
          <h1>Skill Analysis</h1>
          <p>Understand your current technical skill strength.</p>
        </div>
      </div>

      <div className="skill-overview">

        <div className="skill-score-card">
          <p className="card-label">OVERALL SKILL SCORE</p>
          <strong>72%</strong>
          <span>Good foundation</span>
        </div>

        <div className="skill-summary">
          <h2>Your Skill Profile</h2>
          <p>
            You have a strong foundation in programming and data-related
            skills. Strengthening advanced ML skills can improve your
            career readiness.
          </p>

          <ProgressBar
            label="Overall Progress"
            value={72}
          />
        </div>

      </div>

      <div className="section-heading">
        <p className="page-label">SKILL BREAKDOWN</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-list">

        {skills.map((skill) => (
          <div className="skill-analysis-card" key={skill.name}>

            <div className="skill-info">
              <div>
                <h3>{skill.name}</h3>
                <span>{skill.category}</span>
              </div>

              <strong>{skill.score}%</strong>
            </div>

            <ProgressBar value={skill.score} />

          </div>
        ))}

      </div>

    </div>
  )
}

export default SkillAnalysis