function Navbar({ theme, toggleTheme }) {

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

      </div>

    </nav>
  )
}

export default Navbar