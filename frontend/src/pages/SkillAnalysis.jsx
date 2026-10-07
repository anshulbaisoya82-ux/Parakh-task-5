import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

function SkillAnalysis() {
  const [skills, setSkills] = useState([
    { name: 'Python', category: 'Programming', score: 88 },
    { name: 'SQL', category: 'Data', score: 76 },
    { name: 'Machine Learning', category: 'AI / ML', score: 72 },
    { name: 'Statistics', category: 'Data', score: 70 },
    { name: 'JavaScript', category: 'Programming', score: 68 },
    { name: 'React', category: 'Frontend', score: 64 },
  ])

  const analyzeSkills = () => {
    setSkills([...skills])
    alert('Skill analysis completed!')
  }

  const getLevel = (score) => {
    if (score >= 80) return 'Strong'
    if (score >= 70) return 'Good'
    return 'Developing'
  }

  return (
    <div className="skills-page">

      <div className="page-header skills-header">

        <div>
          <p className="page-label">SKILL ANALYSIS</p>

          <h1>Skill Analysis</h1>

          <p>
            Understand your current technical skill level and
            identify your strongest areas.
          </p>
        </div>

        <Button onClick={analyzeSkills}>
          Analyze Skills
        </Button>

      </div>

      <div className="skill-overview">

        <div className="skill-overview-card">
          <span>Total Skills</span>
          <strong>{skills.length}</strong>
          <small>Technical skills tracked</small>
        </div>

        <div className="skill-overview-card">
          <span>Strong Skills</span>
          <strong>
            {skills.filter(skill => skill.score >= 80).length}
          </strong>
          <small>80% and above</small>
        </div>

        <div className="skill-overview-card">
          <span>Average Score</span>
          <strong>
            {Math.round(
              skills.reduce((sum, skill) => sum + skill.score, 0) /
              skills.length
            )}%
          </strong>
          <small>Overall proficiency</small>
        </div>

      </div>

      <div className="profile-card skill-analysis-panel">

        <div className="section-heading">

          <div>
            <p className="page-label">YOUR SKILLS</p>
            <h2>Skill Performance</h2>
          </div>

          <span className="panel-badge">
            {skills.length} Skills
          </span>

        </div>

        <div className="skill-analysis-list">

          {skills.map((skill) => (

            <div
              className="skill-analysis-item"
              key={skill.name}
            >

              <div className="skill-analysis-info">

                <div className="skill-name-area">

                  <div className="skill-letter">
                    {skill.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{skill.name}</strong>
                    <span>{skill.category}</span>
                  </div>

                </div>

                <div className="skill-score-area">

                  <span
                    className={
                      skill.score >= 80
                        ? 'skill-level strong'
                        : skill.score >= 70
                          ? 'skill-level good'
                          : 'skill-level developing'
                    }
                  >
                    {getLevel(skill.score)}
                  </span>

                  <b>{skill.score}%</b>

                </div>

              </div>

              <ProgressBar
                label=""
                value={skill.score}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default SkillAnalysis