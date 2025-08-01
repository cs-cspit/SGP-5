import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Home from './pages/DashboardPage'
import {Routes,Route} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
    
  )
}

export default App
