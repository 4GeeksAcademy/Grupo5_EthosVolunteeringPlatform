import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../store/appContext';
import { useContext } from 'react';

export const ModalEvent = ({ modal, toggle }) => {

    const { store, actions } = useContext(Context);
    const [formattedDate, setFormattedDate] = useState("");
    const [time, setTime] = useState("");
    const [file, setFile] = useState();



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

    //Imgur API
    // const onFileChange = event => {
    //     // Updating the state
    //     setFile({ file: event.target.files[0] });
    //   };


    //   const onFileUpload = async () => {
    //     // Client ID
    //     const clientId = "f7f6813a337de1d",
    //       auth = "Client-ID " + clientId;
      
    //     // Creating an object of formData
    //     const formData = new FormData();
      
    //     // Adding our image to formData
    //     formData.append("file", file);
      
    //     // Making the post request
    //     await fetch("https://api.imgur.com/3/image/", {
    //       // API Endpoint
    //       method: "POST", // HTTP Method
    //       body: formData, // Data to be sent
    //       headers: {
    //         // Setting header
    //         Authorization: auth,
    //         Accept: "application/json",
    //       },
    //     })
    //       .then((res) => alert("image uploaded") && console.log(res)) // Handling success
    //       .catch((err) => alert("Failed") && console.log(err)); // Handling error
    //   };






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
                            <label for="exampleFormControlInput1" className="form-label">Confirme el organizador del Evento</label>
                            <input name="org_name" onChange={actions.handleChange} type="name" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Título del evento</label>
                            <input name="name" onChange={actions.handleChange} type="name" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Seleccione una imagen para el evento <small>URL</small></label>
                            <input name="event_img" onChange={actions.handleChange} type="name" className="form-control" id="exampleFormControlInput1"></input>
                            {/* <button onClick={onFileUpload}>Upload</button> */}

                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Causa del evento <small>(Ambiente, Cultura o Salud y Bienestar)</small></label>
                            <input name="category" onChange={actions.handleChange} type="name" className="form-control" id="exampleFormControlInput1"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Descripción del evento</label>
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
                            <small><input className='ms-3 text-dark' name="event_start_date_time" type="date" onChange={actions.handleChange} /></small>
                        </div>

                        <div className="mb-3">
                            <label>Fecha de cierre:</label>
                            {/* input date */}
                            <small><input className='ms-3 text-dark' name="event_end_date_time" type="date" onChange={actions.handleChange} /></small>
                        </div>

                        <div className="mb-3">
                            <label>Hora inicio: <small>(formato de 24 horas)</small></label>
                            <small><input className='ms-3 text-dark' name="event_time" type="time" onChange={actions.handleChange} /></small>
                            {/* Mostrar fecha en formato dd/mm/yyyy */}
                        </div>

                        <div className="mb-3">
                            <label>Hora final: <small>(formato de 24 horas)</small></label>
                            <small><input className='ms-3 text-dark' name="event_end_time" type="time" onChange={actions.handleChange} /></small>
                            {/* Mostrar fecha en formato dd/mm/yyyy */}
                        </div>

                        <hr className="solid"></hr>

                        <div className='mb-3'>


                            <div className='row mt-2 justify-content-end'>
                                <div className='col-6'>
                                    <Button className='save-event' type='submit' color="primary" onClick={toggle}>Crear</Button>
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




