import { useState } from 'react'
import Button from '../components/Button'

function Profile() {
  const [profile, setProfile] = useState({
    name: 'Lavkush Nishad',
    email: 'lavkush@example.com',
    education: 'B.Tech Computer Science',
    year: 2,
    cgpa: 8.2,
    skills: 'Python, C++, JavaScript, React, SQL',
    experience: 'Frontend development projects',
    interests: 'AI, Machine Learning, Web Development',
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

    console.log({
      ...profile,
      year: Number(profile.year),
      cgpa: Number(profile.cgpa),
      skills: profile.skills.split(',').map((skill) => skill.trim()),
      interests: profile.interests
        .split(',')
        .map((interest) => interest.trim()),
    })
  }

  return (
    <div className="profile-page">

      <div className="page-header">
        <div>
          <p className="page-label">STUDENT PROFILE</p>
          <h1>My Profile</h1>
          <p>Manage your academic and career information.</p>
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>

        <div className="profile-form-card">
          <div className="section-heading">
            <p className="page-label">PERSONAL INFORMATION</p>
            <h2>Basic Details</h2>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Education</label>
              <input
                name="education"
                value={profile.education}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                name="year"
                min="1"
                max="4"
                value={profile.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>CGPA</label>
              <input
                type="number"
                name="cgpa"
                min="0"
                max="10"
                step="0.1"
                value={profile.cgpa}
                onChange={handleChange}
                required
              />
            </div>

          </div>
        </div>

        <div className="profile-form-card">
          <div className="section-heading">
            <p className="page-label">CAREER INFORMATION</p>
            <h2>Skills & Interests</h2>
          </div>

          <div className="form-group">
            <label>Skills</label>
            <input
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="Python, SQL, React"
              required
            />
            <small>Separate skills with commas.</small>
          </div>

          <div className="form-group">
            <label>Experience</label>
            <textarea
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              placeholder="Projects, internships or other experience"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Interests</label>
            <input
              name="interests"
              value={profile.interests}
              onChange={handleChange}
              placeholder="AI, Machine Learning, Web Development"
              required
            />
            <small>Separate interests with commas.</small>
          </div>

          <Button type="submit">
            Save Profile
          </Button>
        </div>

      </form>

    </div>
  )
}

export default Profile