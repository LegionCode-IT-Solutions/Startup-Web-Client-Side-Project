import React from 'react'
import { AuthProvider } from './store/authContext'
import { Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  </AuthProvider>
}

export default App