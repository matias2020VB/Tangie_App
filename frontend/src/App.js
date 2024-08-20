import './assets/css/App.css';
import NavegationBar from './components/NavegationBar'
import WeatherPanel from './components/WeatherPanel';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import  PublicRoutes  from "./routes/PublicRoutes";
import  PrivateRoutes  from './routes/PrivateRoutes';

function App() {
  const [user, setUser] = useState({
    logged:false
  
  });

  console.log('user logged:', user.logged); // Debugging

  return (
    <div>
      <UserContext.Provider value={{ user, setUser}}>
        
        <NavegationBar/>
        <WeatherPanel/>
        <Routes>
          {
            user.logged ? (
              <Route path="/*" element={<PrivateRoutes />} />
            ):(
              <Route path='/*' element={<PublicRoutes />} />
            )
          }
        </Routes>
      </UserContext.Provider>
    </div>

  );
}
export default App;


// <>
//       <NavegationBar />      
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>  
//     </>