import { useState } from 'react'
import Button from '../components/Button'

function Cluster() {
  const [cluster, setCluster] = useState(null)

  const analyzeCluster = () => {
    setCluster({
      name: 'Data & ML Oriented',
      similarity: 84,
      description:
        'Your skill profile is strongly aligned with students focused on Data Science and Machine Learning.',
      strengths: [
        'Python',
        'SQL',
        'Machine Learning',
        'Statistics',
      ],
    })
  }

  return (
    <div className="cluster-page">

      <div className="page-header">
        <div>
          <p className="page-label">STUDENT CLUSTER</p>
          <h1>My Cluster</h1>
          <p>Understand which skill group best matches your profile.</p>
        </div>

        <Button onClick={analyzeCluster}>
          Analyze My Cluster
        </Button>
      </div>

      {!cluster && (
        <div className="profile-card cluster-start">
          <h2>Discover your student cluster</h2>
          <p>
            Your skills and profile will be compared with similar
            student groups.
          </p>
        </div>
      )}

      {cluster && (
        <div className="cluster-result">

          <div className="profile-card cluster-main-card">

            <div className="cluster-info">
              <p className="page-label">YOUR CLUSTER</p>
              <h2>{cluster.name}</h2>
              <p>{cluster.description}</p>
            </div>

            <div className="cluster-score">
              <strong>{cluster.similarity}%</strong>
              <span>Similarity</span>
            </div>

          </div>

          <div className="profile-card">

            <div className="section-heading">
              <p className="page-label">CLUSTER STRENGTHS</p>
              <h2>Your Strong Areas</h2>
            </div>

            <div className="cluster-skills">

              {cluster.strengths.map((skill) => (
                <div className="cluster-skill" key={skill}>
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Cluster