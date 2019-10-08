import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { borrarCitaAction } from '../../actions/citasAction';

const ListadoCitas = () => {

    // obtener las citas del state
    const citas =  useSelector((state) => state.citas);

    // Mensaje condicional
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No Hay Citas' : 'Administra las Citas aquí';

    // Dispatch para mandar llamar la acción de eliminar
    const dispatch = useDispatch();

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>

                <div className="lista-citas">
                    {citas.citas.map(cita => (
                        <div key={cita.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{cita.mascota}</h3>
                                <p className="card-text"><span>Nombre Dueño: </span>     {cita.propietario}</p>
                                <p className="card-text"><span>Marca:</span> {cita.marca}</p>
                                <p className="card-text"><span>Modelo:</span> {cita.modelo} </p>
                                <p className="card-text"><span>Año:</span> {cita.ano} </p>
                                <p className="card-text"><span>reparacion: </span> <br /> 
                                {cita.reparacion}
                                </p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => dispatch(borrarCitaAction(cita.id))}
                                >
                                        Borrar &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
 
export default ListadoCitas;