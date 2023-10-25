import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import Login from './Components/Login.js'
import ParticleBackground from './Components/ParticleBackground';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from "react-router-dom";
import Add_customer from './Components/Add-customer'
import Add_delivery from './Components/Add-Delivery'
import Add_NewChallan from './Components/Add-NewChallan'
import Bill from './Components/Bill'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>    
   <Routes>

    <Route path='' element={<Login />}/>
    <Route path='/Home' element={<Sidebar />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    <Route path='/Add_customer' element={<Add_customer />} />
    <Route path='/Add_Delivery' element={<Add_delivery />} />
    <Route path='/Add_NewChallan' element={<Add_NewChallan />} />
    <Route path='/Bill' element={<Bill />} />
    

   </Routes>
   </>
  );
}

export default App;
