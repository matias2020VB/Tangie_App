import React from 'react';
import { Link } from 'react-router-dom';

const NavegationBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={require(`../images/photo2.jpeg`)} alt="" width="100px" height="80px"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">

                            <li class="nav-item">
                                <Link class="nav-link active" to="/home">Home</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/register">Register</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavegationBar;

