import { Route, Routes, Navigate} from "react-router-dom";
import Home  from "../components/Home";
import Login  from "../components/Login";
import Register  from "../components/Register";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact path="/home" element={ <Home />} />
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/register" element={ <Register />} />

            <Route path='*' element={<Navigate to='/' replace />} />

        </Routes>
    )
}

export default PublicRoutes
