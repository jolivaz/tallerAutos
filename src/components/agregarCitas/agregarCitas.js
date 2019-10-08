import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaAction } from '../../actions/citasAction';
import { validarFormularioAction } from '../../actions/validarActions';
import uuid from 'uuid/v4';

const AgregarCita = () => {

    // State del componente
    const [ marca, guardarMarca] = useState('');
    const [ propietario, guardarPropietario ] = useState('');
    const [ ano, guardarAno ] = useState('');
    const [ modelo, guardarModelo ] = useState('');
    const [ reparacion, guardarReparacion ] = useState('');

    // Dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const agregarNuevaCita = (cita) => dispatch( agregarCitaAction(cita) );
    const validarFormulario = (estado) => dispatch( validarFormularioAction(estado) );

    // useSelector es similar a mapStateToProps en Hooks
    const error = useSelector( ( state )  => state.error);

    // Cuando el formulario es enviado
    const submitNuevaCita = e => {
        e.preventDefault();

        // Validar el formulario

        if( marca.trim() === '' || propietario.trim() === '' || ano.trim() === '' || modelo.trim() === '' || reparacion.trim() === '' ) {
            validarFormulario(true);
            return;
        }

        validarFormulario(false);


        // Crear la nueva cita
        agregarNuevaCita({
            id: uuid(),
            marca,
            propietario,
            ano,
            modelo,
            reparacion
        })


        // Reiniciar el formulario
        guardarMarca('');
        guardarPropietario('');
        guardarAno('');
        guardarModelo('');
        guardarReparacion('');
    }

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>

                <form onSubmit={submitNuevaCita}>
                
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Nombre del Dueño</label>
                        <div className="col-sm-8 col-lg-9">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Dueño del auto"
                                value={propietario}
                                onChange={ e => guardarPropietario(e.target.value) }
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Marca del auto</label>
                        <div className="col-sm-8 col-lg-9">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre marca" 
                                value={marca}
                                onChange={ e => guardarMarca(e.target.value) }
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Año</label>
                        <div className="col-sm-8 col-lg-3  mb-4 mb-lg-0">
                            <input 
                                type="number" 
                                className="form-control"
                                value={ano}
                                onChange={ e => guardarAno(e.target.value) }
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Modelo</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={modelo}
                                onChange={ e => guardarModelo(e.target.value) }
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Reparacion</label>
                        <div className="col-sm-8 col-lg-9">
                            <textarea 
                                className="form-control"
                                value={reparacion}
                                onChange={ e => guardarReparacion(e.target.value) }
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>

                { error.error  ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
            </div>
    </div>
    );
}
 
export default AgregarCita;
