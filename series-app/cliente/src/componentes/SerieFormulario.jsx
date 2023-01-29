import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const SerieFormulario = () => {
    const [titulo, setTitulo] = useState('')
    const [creador, setCreador] = useState('')
    const [rating, setRating] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')
    const [portada, setPortada] = useState('')
    
    const nagiate = useNavigate()

const submitHander = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/crearserie',{
        titulo,
        creador,
        rating,
        genero,
        ano,
        portada    
    }).then((res)=>{
        console.log(res);
        nagiate('/todasseries')
    }).catch((error)=>{
        console.log(error)
    })
}


return (
    <div className='col-6 mx-auto'>

        <h1> Crear Series</h1>
        <form onSubmit={submitHander}>
            <label htmlFor=""  className='form-label' > Titulo de Serie</label>
            <input type="text" className='form-control'onChange={(e)=>setTitulo(e.target.value)}/>

            <label htmlFor="" className='form-label' > Creador</label>
            <input type="text" className='form-control'onChange={(e)=>setCreador(e.target.value)}/>
            
            <label htmlFor="" className='form-label' > Reating</label>
            <input type="text" className='form-control'onChange={(e)=>setRating(e.target.value)}/>
            
            <label htmlFor="" className='form-label' > Genero</label>
            <input type="text" className='form-control'onChange={(e)=>setGenero(e.target.value)}/>
            
            <label htmlFor="" className='form-label' > Año</label>
            <input type="number" className='form-control'onChange={(e)=>setAno(e.target.value)}/>

            <label htmlFor="" className='form-label'> Portada</label>
            <input type="text" className='form-control'onChange={(e)=>setPortada(e.target.value)}/>

            <button className='btn btn-danger mt-3'> Crear</button>      
        
        


        </form>

    </div>
)
}

export default SerieFormulario
