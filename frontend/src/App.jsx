import { useEffect, useState } from 'react'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Profile from './pages/Profile'
import CareerPrediction from './pages/CareerPrediction'
import SkillAnalysis from './pages/SkillAnalysis'
import SkillGap from './pages/SkillGap'
import Cluster from './pages/Cluster'
import Dashboard from './pages/Dashboard'

import Signup from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Recommendations from './pages/Recommendations'
import CareerDetails from './pages/CareerDetails'


// Protected Route
function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}


// Main App Layout
function AppLayout({ theme, toggleTheme }) {
  const location = useLocation()

  // Auth pages par dashboard layout hide karo
  const authPages = [
    '/login',
    '/signup',
    '/verify-otp',
    '/forgot-password',
    '/reset-password',
  ]

  const isAuthPage = authPages.includes(location.pathname)

  return (
    <div className="app">

      {!isAuthPage && (
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      <div className={isAuthPage ? '' : 'layout'}>

        {!isAuthPage && <Sidebar />}

        <main className={isAuthPage ? '' : 'main-content'}>
          <Routes>

            {/* Auth Routes */}
            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/verify-otp"
              element={<VerifyOtp />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            <Route
              path="/reset-password"
              element={<ResetPassword />}
            />


            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/career"
              element={
                <ProtectedRoute>
                  <CareerPrediction />
                </ProtectedRoute>
              }
            />

            <Route
              path="/skills"
              element={
                <ProtectedRoute>
                  <SkillAnalysis />
                </ProtectedRoute>
              }
            />

            <Route
              path="/skill-gap"
              element={
                <ProtectedRoute>
                  <SkillGap />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cluster"
              element={
                <ProtectedRoute>
                  <Cluster />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/recommendations"
              element={
                <ProtectedRoute>
                  <Recommendations />
                </ProtectedRoute>
              }
            />

            <Route
              path="/career-details"
              element={
                <ProtectedRoute>
                  <CareerDetails />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>

      </div>

    </div>
  )
}


function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })


  // Light/Dark theme toggle
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light'
        ? 'dark'
        : 'light'
    )
  }


  // Theme ko HTML root par apply karo
  useEffect(() => {

    document.documentElement.setAttribute(
      'data-theme',
      theme
    )

    localStorage.setItem(
      'theme',
      theme
    )

  }, [theme])


  return (
    <BrowserRouter>
      <AppLayout
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </BrowserRouter>
  )
}


export default App