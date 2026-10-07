import { useNavigate } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate()

  // Logout karke Login page par bhejo
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <nav className="navbar">

      <div className="navbar-title">
        <span>AI Career & Skill Intelligence Platform</span>
      </div>

      <div className="navbar-user">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div className="notification">
          ♧
        </div>

        <div className="navbar-avatar">
          L
        </div>

        <div className="navbar-user-info">
          <strong>Lavkush Nishad</strong>
          <span>Student</span>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  )
}

export default Navbar