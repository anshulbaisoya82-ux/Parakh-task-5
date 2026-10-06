
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="app">
      <Navbar />

<div className = "layout">
  <Sidebar/>

      <main className="main-content">
        <h1>Welcome to PARAKH</h1>
        <p>
          Discover your career path and identify the skills you need to grow.
        </p>
      </main>
    </div>
    </div>
  )
}

export default App 
