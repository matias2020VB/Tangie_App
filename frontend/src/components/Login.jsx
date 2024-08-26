import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import '../assets/css/App.css';

function Login() {

    const navigate = useNavigate();

    const initialValues = {
        email:'',
        password:'',
    }
    
    const { setUser } = useContext(UserContext);

    const handleLogin = async (values) => {
        console.log(values)
        try {
            const response = await axios.post('http://localhost:5000/auth/login', values)
            console.log(response.data);
            const { role } = response.data
            
            Swal.fire({
                title: "success",
                text: "Login Exitoso!",
                icon: "success",
                showConfirmButton: 'false',
                timer: 1800,
            })
            setUser({
                logged:true,
                role: role,
            })
            navigate('/panel')
            //navigate('/home')
        }   catch (error) {
            console.log(error);
            console.log('Estoy en catch')
            Swal.fire({
                title: "Error",
                text: "No se ha podido iniciar sesión",
                icon: "error",
                showConfirmButton: false,
                timer: 1800,
            })

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
