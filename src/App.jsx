
import './App.css'

import {Routes, Route} from 'react-router-dom'
import LogIn from './pages/signin.jsx'
import Home from './pages/home.jsx'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<Home />} />

    </Routes>
    </>
  )
}

export default App
