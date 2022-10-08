import React, { useState } from "react";
import uniqid from 'uniqid'

const ListaDeTareas = () =>{

const [tarea, setTarea] = useState('')
const [ListaDeTareas, setListaDeTareas] = useState([])
const [modificacion, setModificacion] = useState(false)
const [fecha, setFecha] = useState('')
const [descripcion, setDescropcion] = useState('')

const [error, setError] = useState(null)


const addTarea = (e)=>{
    e.preventDefault()
    if(!tarea.trim()){
        setError('el campo el nombre de la tarea esta vacio')
        return
    }
    const nuevaTarea = {
        fecha:uniqid(),
        tituloTarea:tarea
    }
    setListaDeTareas([...listatareas,nuevaTarea])
    setTarea('')
    setError(null)
}
const deleteTarea = (id) =>{
    const nuevaArray = listatareas.filter( item => item.fecha !== fecha)
    setListaDeTareas(nuevaArray)
}
const editar = (item) =>{
    setModificacion(true)
    setTarea(item.tituloTarea)
    setFecha(item.fecha)

}
const editarTarea = (e) =>{
    e.preventdefault()
    const NuevoArray = listatareas.map( item => item.fecha === fecha ? {fecha:item.fecha, tituloTarea:tarea}: item)
    setListanombres(NuevoArray)
}

    return(
        <div>
            <h2>Lista de tareas</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de tareas</h2>
                    <ul className="list-group">
                        {
                            listatareas.map( item =>
                                <li key="{item.fecha}"
                                 className="list-group-item">
                                    {item.tituloTarea}
                                    <button
                                    className="btn btn-info float-right"
                                    onClick={ () => {editar(item)}}
                                    >
                                        EDITAR
                                    </button>
                                    <button
                                    className="btn btn-danger float-right"
                                    onClick={ () => {deleteTarea(item.fecha)}}
                                    >
                                        BORRAR
                                    </button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>formulario para añadir tareas</h2>
                    <form onSubmit={modificacion ? editar : addTarea} className="form-group">
                        <input onChange={(e)=>{setTarea(e.target.value)}}
                         className="form-control mb-3"
                          type="text"
                          placeholder="Introduce la tarea" 
                          value={tarea}
                          />
                        <input
                         className="btn btn-info btn-block" 
                         type="submit" 
                         value={modificacion ? 'EDITAR TAREA' : 'REGISTRAR TAREA'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListaDeTareas 