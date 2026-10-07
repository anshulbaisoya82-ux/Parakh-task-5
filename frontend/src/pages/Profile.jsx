
import { useState } from 'react'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'

function Profile() {
  const [profile, setProfile] = useState({
    name: 'Lavkush Nishad',
    email: '',
    college: '',
    branch: 'Computer Science',
    degree: 'B.Tech',
    year: '2nd Year',
    skills: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Profile Data:', profile)
    alert('Profile saved successfully!')
  }

  return (
    <div className="profile-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <p className="page-label">STUDENT PROFILE</p>
          <h1>My Profile</h1>
          <p>Manage your personal, academic and skill information.</p>
        </div>
      </div>

      {/* PROFILE OVERVIEW */}
      <section className="profile-overview-card">

        <div className="profile-avatar-large">
          L
        </div>

        <div className="profile-overview-info">
          <h2>{profile.name}</h2>

          <p>
            {profile.degree}
            <span>•</span>
            {profile.branch}
          </p>

          <div className="profile-meta">
            <span>🎓 {profile.year}</span>
            <span>📍 India</span>
          </div>
        </div>

        <div className="profile-completion">
          <div className="completion-header">
            <span>Profile Completion</span>
            <strong>80%</strong>
          </div>

          <ProgressBar value={80} />

          <small>
            Complete your profile to get better career recommendations.
          </small>
        </div>

      </section>

      <form className="profile-form" onSubmit={handleSubmit}>

        {/* PERSONAL INFORMATION */}
        <section className="profile-card profile-information-card">

          <div className="section-heading profile-section-heading">
            <div>
              <p className="page-label">PERSONAL INFORMATION</p>
              <h2>Student Details</h2>
            </div>

            <span className="profile-section-icon">✎</span>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>College</label>
              <input
                type="text"
                name="college"
                value={profile.college}
                onChange={handleChange}
                placeholder="Enter your college"
              />
            </div>

            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={profile.degree}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Branch</label>
              <input
                type="text"
                name="branch"
                value={profile.branch}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <select
                name="year"
                value={profile.year}
                onChange={handleChange}
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section className="profile-card profile-skills-card">

          <div className="section-heading">
            <p className="page-label">TECHNICAL SKILLS</p>
            <h2>Your Skills</h2>
          </div>

          <div className="form-group">
            <label>Skills</label>

            <textarea
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="Example: Python, SQL, React, Machine Learning"
              rows="4"
            />

            <small className="input-help">
              Add the technical skills you currently know. Separate multiple
              skills with commas.
            </small>
          </div>

        </section>

        {/* QUICK STATS */}
        <section className="profile-stats-grid">

          <div className="profile-stat-card">
            <span className="profile-stat-icon">✓</span>
            <div>
              <strong>6</strong>
              <span>Skills Learned</span>
            </div>
          </div>

          <div className="profile-stat-card">
            <span className="profile-stat-icon">◎</span>
            <div>
              <strong>4</strong>
              <span>Career Clusters</span>
            </div>
          </div>

          <div className="profile-stat-card">
            <span className="profile-stat-icon">!</span>
            <div>
              <strong>3</strong>
              <span>Skill Gaps</span>
            </div>
          </div>

        </section>

        {/* SAVE */}
        <div className="profile-save-area">
          <Button type="submit">
            Save Profile
          </Button>
        </div>

      </form>

    </div>
  )
}

export default Profile
