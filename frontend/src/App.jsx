import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Profile from './pages/Profile'
import CareerPrediction from './pages/CareerPrediction'
import SkillAnalysis from './pages/SkillAnalysis'
import SkillGap from './pages/SkillGap'
import Cluster from './pages/Cluster'
import Dashboard from './pages/Dashboard'

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === 'light' ? 'dark' : 'light'
    )
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>

      <div className="app">

        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <div className="layout">

          <Sidebar />

          <main className="main-content">

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/career"
                element={<CareerPrediction />}
              />

              <Route
                path="/skills"
                element={<SkillAnalysis />}
              />

              <Route
                path="/skill-gap"
                element={<SkillGap />}
              />

              <Route
                path="/cluster"
                element={<Cluster />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App