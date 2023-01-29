import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate,Link } from 'react-router-dom'

const UnaSerie = () => {

    // editar
    const[serie, setSerie] = useState({})
    // obtner lid
    const {id} = useParams()
    const navigate= useNavigate()

    useEffect(()=>{

        axios.get(`http://localhost:8000/api/unaserie/${id}`)
        .then((res)=>{
            console.log(res)
            setSerie(res.data)
        }).catch((error)=>{
            console.log(error)
        })

    },[])

const  borrarSerie = ()=>{
    axios.delete(`http://localhost:8000/api/borrarserie/${id}`)
    .then((res)=>{
        console.log(res)
        setSerie(res.data)
    }).catch((error)=>{
        console.log(error)
    })

}
    
return (
    <div>
        <img src={serie.portada} alt=""/>
        <p> {serie.titulo}</p>
        <p> {serie.creador}</p>
        <p> {serie.ano}</p>
        <p> {serie.createdAt}</p>
        <button className='btn btn-danger' onClick={borrarSerie}>Borrar</button>
    
    </div>
)
}

export default UnaSerie
