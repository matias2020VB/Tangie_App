// import './App.css';
import NavegationBar from './components/NavegationBar'
import  Home  from './components/Home';
import  Login  from './components/Login';
import  Register  from './components/Register';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavegationBar />      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>  
    </>
  );
}
export default App;
