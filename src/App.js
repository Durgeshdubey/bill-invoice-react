import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import Login from './Components/Login.js'
import ParticleBackground from './Components/ParticleBackground';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from "react-router-dom";

function App() {
  return (
    <>    
   <Routes>

    <Route path='/' element={<Login />}/>
    <Route path='/dashboard' element={<Dashboard />} />

   </Routes>
   </>
  );
}

export default App;
