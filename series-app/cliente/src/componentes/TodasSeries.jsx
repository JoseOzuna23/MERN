import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const TodasSeries = () => {

    const [lista, setLista]= useState([])

    useEffect(()=>{

        axios.get('http://localhost:8000/api/obtenerseries')
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((error)=>{
            console.log(error)
        })


    },[])

return (
    <div c>
    
        {
            lista.map((serie)=>(
                <div>
                <h2> {serie.titulo}</h2>
                <Link to = {`/unaserie/${serie._id}`} className='d-block' > Mas info</Link>
                <img className='col col-4' src={serie.portada} />                
                </div>

            ))
        }
    
    </div>
)
}

export default TodasSeries
