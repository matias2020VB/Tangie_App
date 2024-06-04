import { Field, Form, Formik } from 'formik'
import React from 'react'
import axios from 'axios';


function Login() {

    const initialValues = {
        email:'',
        password:'',
    }
    
    const handleLogin = async (values) => {
        console.log(values)
        try {
            const response = await axios.post('http://localhost:5000/auth/login', values)
            console.log(response.data);    
        }   catch (error) {
            console.error(error);

        }
    } 
    return (
        <div>
            <div className="news_section layout_padding">
            <div className="container">
                <div className="d-flex  justify-content-center">
                <h1 className="services_text custom_main">Inicio de sesión</h1>
                </div>
            </div>
            </div>
            <div className='row justify-content-center'> 
            <div className='col-md-6'>
                <Formik 
                initialValues={initialValues}
                onSubmit={handleLogin}
                >
                <Form>
                    <div className="form-floating">
                    <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"
                        name='email'
                    />
                    <label htmlFor="floatingInput">Ingresar usuario</label>
                    </div>
                    <div className="form-floating">
                    <Field 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password" 
                        name='password'
                    />
                    <label htmlFor="floatingPassword">Ingresar contraseña</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleLogin}>Iniciar sesión</button>
                </Form>
                </Formik>
            </div>
            </div> 
        </div>
    )
}
export default Login
