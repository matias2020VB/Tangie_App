import React from 'react'
import { useState }  from 'react';

const FormWeather = ({newLocation}) => {
  
  const [city, setCity] = useState("");

  // Creamos la funcion onSubmit para ver si recogemos el dato del formulario.
  const onSubmit = (e) => {
    // Prevenimos el comportamiento por defecto del formulario
    e.preventDefault();
    // Mostramos la ciudad
    console.log(city);  // Aquí debes pasar city 
    // Creo una condicion por si no se escribe ninguna ciudad en el formulario. (City = Variable de estado.)
    if (city === "" || !city) return;

    // En esta variable newLocation alojará a city que city es la ciudad que hemos incluido dentro de nuestro campo de entrada.
    // y la estamos recogiendo con este prop donde este prop es una funcion que a su vez tiene el parametro
    // que es el dato que necesitamos para poder hacer la llamada a la api y obtener la localizacion 
    newLocation(city);
  }
  
  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                <button className="btn btn-secondary-group-text" type="submit">Buscar</button>
            </div>
        </form>
    </div>
  );
}

export default FormWeather;
