
import './App.css'

import {Routes, Route} from 'react-router-dom'
import LogIn from './pages/signin.jsx'
import ResetPass from './pages/resetPass.jsx'
import Register from './pages/register.jsx' 

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      {/* <Route path="/recoverPass" element ={<ResetPass />} />
      <Route path="/register" element ={<Register />} /> */}
    </Routes>
    </>
  )
}

export default App
