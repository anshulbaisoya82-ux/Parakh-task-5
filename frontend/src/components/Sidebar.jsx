
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>PARAKH</h2>
        <p>Career Intelligence</p>
      </div>

      <nav className="sidebar-menu">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/career">Career Prediction</a>
        <a href="/skills">Skill Analysis</a>
        <a href="/skill-gap">Skill Gap</a>
        <a href="/cluster">My Cluster</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </aside>
  )
}

export default Sidebar
