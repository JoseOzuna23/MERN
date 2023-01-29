import React from 'react'
import{NavLink} from 'react-router-dom'

const BarraNavegacion = () => {
return (
    <div className='bg-dark'>
        <h1 className='text-info mb-3'>Series Animadas</h1>
        
        <NavLink to="/nuevaserie"> Formulario Serie</NavLink>
        <NavLink to="/todasseries"> Todas las series</NavLink>
    </div>
)
}

export default BarraNavegacion
