import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const NavegationBar = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser({
            logged:false
        })
    }
    return (
        <>  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="Home.jsx">
                        <img src={require(`../images/photo2.jpeg`)} alt="Brand Logo" width="100" height="80"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                        // Admin
                            user.role === '1' ? (
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/DashboardAdmin">Panel Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={handleLogOut}>Salir</Link>
                                    </li>
                                </ul>
                        // User
                        ): user.role === '2' ? (
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item active">
                                        <Link className="nav-link" to="/Dashboard"> Panel usuario</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                                    </li>
                                </ul> 
                        ):( 
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weather">Weather</Link>
                                </li>
                            </ul>
                        )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavegationBar;

// <ul className="navbar-nav ms-auto">
                            //     <li className="nav-item active">
                            //         <Link className="nav-link" to="/">Home</Link>
                            //     </li>
                            //     <li className="nav-item">
                            //         <Link className="nav-link" to="/register">Registro</Link>
                            //     </li>
                            //     <li className="nav-item">
                            //         <Link className="nav-link" to="/login">Login</Link>
                            //     </li>
                            // </ul> 