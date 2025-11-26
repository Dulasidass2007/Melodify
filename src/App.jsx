import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import './App.css';
import Premium from "./Pages/Premium/Premium";
import {Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/Support" element={<Home/>}/>
      </Routes> 
    </>
  )
}

export default App
