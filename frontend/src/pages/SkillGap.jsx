import { useState } from 'react'
import Button from '../components/Button'

function SkillGap() {
  const [gaps, setGaps] = useState(null)

  const analyzeGap = () => {
    setGaps([
      {
        name: 'Deep Learning',
        current: 45,
        target: 80,
        priority: 'High Priority',
      },
      {
        name: 'NLP',
        current: 38,
        target: 75,
        priority: 'High Priority',
      },
      {
        name: 'Cloud Computing',
        current: 52,
        target: 70,
        priority: 'Medium Priority',
      },
    ])
  }

  return (
    <div className="skill-gap-page">

      <div className="page-header skill-gap-header">

        <div>
          <p className="page-label">SKILL GAP INTELLIGENCE</p>

          <h1>Skill Gap Analysis</h1>

          <p>
            Identify the skills you need to improve for your target career.
          </p>
        </div>

        <Button onClick={analyzeGap}>
          Analyze Skill Gap
        </Button>

      </div>

      {!gaps && (
        <div className="profile-card skill-gap-start">

          <div className="skill-gap-start-icon">
            +
          </div>

          <div>
            <p className="page-label">READY TO ANALYZE</p>

            <h2>Find your skill gaps</h2>

            <p>
              Compare your current skills with the skills required
              for your predicted career.
            </p>
          </div>

        </div>
      )}

      {gaps && (
        <>
          <div className="gap-summary">

            <div className="gap-summary-card">
              <span>Skill Gaps</span>
              <strong>{gaps.length}</strong>
            </div>

            <div className="gap-summary-card">
              <span>High Priority</span>
              <strong>
                {gaps.filter(gap => gap.priority === 'High Priority').length}
              </strong>
            </div>

            <div className="gap-summary-card">
              <span>Focus Area</span>
              <strong>Deep Learning</strong>
            </div>

          </div>

          <div className="gap-list">

            {gaps.map((gap) => {

              const difference = gap.target - gap.current

              return (
                <div className="gap-item" key={gap.name}>

                  <div className="gap-info">

                    <div className="gap-title">

                      <div className="gap-icon">
                        {gap.name.charAt(0)}
                      </div>

                      <div>
                        <h3>{gap.name}</h3>

                        <span
                          className={
                            gap.priority === 'High Priority'
                              ? 'priority-high'
                              : 'priority-medium'
                          }
                        >
                          {gap.priority}
                        </span>
                      </div>

                    </div>

                    <div className="gap-scores">

                      <div>
                        <span>Current</span>
                        <b>{gap.current}%</b>
                      </div>

                      <div>
                        <span>Target</span>
                        <b>{gap.target}%</b>
                      </div>

                      <div className="gap-difference">
                        <span>Gap</span>
                        <b>{difference}%</b>
                      </div>

                    </div>

                  </div>

                  <div className="gap-bar">

                    <div className="gap-bar-track">

                      <div
                        className="gap-current"
                        style={{ width: `${gap.current}%` }}
                      />

                      <div
                        className="gap-target"
                        style={{ width: `${gap.target}%` }}
                      />

                    </div>

                    <div className="gap-legend">
                      <span>
                        <i className="legend-current"></i>
                        Current
                      </span>

                      <span>
                        <i className="legend-target"></i>
                        Target
                      </span>
                    </div>

                  </div>

                  <p className="gap-recommendation">
                    <strong>Recommended:</strong> Build projects and
                    complete practical courses in {gap.name}.
                  </p>

                </div>
              )
            })}

          </div>
        </>
      )}

    </div>
  )
}

export default SkillGap