import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../store/appContext';
import { useContext } from 'react';

export const ModalEvent = ({ modal, toggle }) => {

    const { store, actions } = useContext(Context);
    const [formattedDate, setFormattedDate] = useState("");
    const [time, setTime] = useState("");

    

    // Change date format
    const changeDateFormat = (e) => {
        // Obtener el valor del input
        const dateValue = e.target.value;

        // Dividir la fecha en año, mes y dia
        const dateParts = dateValue.split("-");
        console.log(dateParts)
        // Formatear la fecha como dd/mm/yyyy
        const formatted = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        // Actualizar el estado con la fecha formateada
        setFormattedDate(formatted);
    }

    const handleTimeChange = (e) => {
        // Actualizo el estado con la hora seleccionada
        setTime(e.target.value);
    }






    return (
        <>
            <Modal className='popup' isOpen={modal} toggle={toggle} >
                <ModalHeader className='text-dark' toggle={toggle}>Nuevo evento</ModalHeader>
                <ModalBody className='text-dark'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        actions.fetchAddEvent();
                        e.target.reset();
                    }}>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Título</label>
                            <input name="name" onChange={actions.handleChange} type="name" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
                            <textarea name="description" onChange={actions.handleChange} className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Localidad</label>
                            <input name="location" onChange={actions.handleChange} type="location" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">¿Cuántos días dura el evento?</label>
                            <input name="duration" onChange={actions.handleChange} type="text" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label>Fecha de inicio:</label>
                            {/* input date */}
                            <small><input className='ms-3 text-dark' name="event_start_date_time" type="date" value={formattedDate} onChange={actions.handleChange} /></small>
                        </div>

                        <div className="mb-3">
                            <label>Fecha de cierre:</label>
                            {/* input date */}
                            <small><input className='ms-3 text-dark' name="event_end_date_time" type="date" value={formattedDate} onChange={actions.handleChange} /></small>
                        </div>

                        <div className="mb-3">
                            <label>Hora <small>(formato de 24 horas)</small></label>
                            <small><input className='ms-3 text-dark' name="event_time" type="time" value={time} onChange={actions.handleChange}  /></small>
                            {/* Mostrar fecha en formato dd/mm/yyyy */}
                        </div>

                        <hr className="solid"></hr>

                        <div className='mb-3'>

                            <div>
                                <label> Fecha seleccionada: <span> {formattedDate ? formattedDate : 'Ninguna'}</span></label>
                                {/* Mostrar hora seleccionada */}
                            </div>
                            <div>
                                <label> Hora seleccionada: <span>{time ? time : 'Ninguna'}</span></label>
                            </div>

                            <div className='row mt-2 justify-content-end'>
                                <div className='col-6'>
                                    <Button className='save-event' type='submit' color="primary">Crear</Button>
                                    <Button className='nosave-event ms-2' color="secondary" onClick={toggle}>Cancelar</Button>
                                </div>

                            </div>


                        </div>
                    </form>


                </ModalBody>

            </Modal>

        </>
    )
}




