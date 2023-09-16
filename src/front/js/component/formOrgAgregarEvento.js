import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const FormOrgAgregarEvento = () => {

  const navigate = useNavigate();

  const [formattedDate, setFormattedDate] = useState("");
  const [time, setTime] = useState("");

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







      <div className='form-wrapper-event container mt-5'>
        <form onSubmit={(e) => {
                    e.preventDefault()
                    e.target.reset()
                    navigate("/PerfilOrg")
                }}>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre del evento</label>
            <input type="name" className="form-control" id="exampleFormControlInput1"></input>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Descripcion del evento</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Lugar del evento</label>
            <input type="location" className="form-control" id="exampleFormControlInput1"></input>
          </div>

          <div className='mb-3'>
            <label>Selecciona una fecha de inicio:</label>
            {/* input date */}
            <input type="date" value={formattedDate} onChange={changeDateFormat} />


            <label>Seleccione la hora <small>(formato de 24 horas)</small>.</label>
            <input type="time" value={time} onChange={handleTimeChange} />
            {/* Mostrar fecha en formato dd/mm/yyyy */}
            <hr className="solid"></hr>
            <div>
              <label> Fechas seleccionadas: <span> {formattedDate ? formattedDate : 'Ninguna'}</span></label>
              {/* Mostrar hora seleccionada */}
            </div>
            <div>
              <label> Hora seleccionada: <span>{time ? time : 'Ninguna'}</span></label>
            </div>

          </div>

          <div className=" row mb-3">
            <div className='col'>
              <label for="exampleFormControlInput1" className="form-label">¿Cuántos días dura el evento?</label>
            </div>
            <div className='col'>
              <input type="tex" className="form-control" id="exampleFormControlInput1"></input>
            </div>
          </div>
          <div className="row">
            <div className='col-sm-12 mt-1 text-center'>
              <button type='submit' className='submit-button btn'>Enviar</button>
            </div>
          </div>


        </form>
      </div>
    </>

  )
}