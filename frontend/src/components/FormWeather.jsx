import React from 'react'
import { useState }  from 'react';

const FormWeather = ({newLocation}) => {
  // Estado para almacenar la ciudad ingresada
  const [city, setCity] = useState("");
  // Creamos funcion onSubmit para ver si recogemos el dato del formulario.
  const onSubmit = (e) => {
    e.preventDefault(); // previene la recarga de la pagina al enviar el formulario
    console.log(city);
    // Si no se ingresa una ciudad, no se realiza nada.
    if (city === "" || !city) return;
    // llamamos a la funcion "newLocation" con la ciudad ingresada.
    newLocation(city);
  }
  
  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                <button className="btn btn-primary-group-text" type="submit">Buscar</button>
            </div>
        </form>
    </div>
  );
}

export default FormWeather;
