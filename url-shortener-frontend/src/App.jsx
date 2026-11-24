import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import DashboardLayout from './components/dashboard/DashboardLayout'

function App() {

  return (
    <>
      <Router>
      <NavBar />
      <Toaster position='bottom-center' />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<DashboardLayout />}></Route>
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
