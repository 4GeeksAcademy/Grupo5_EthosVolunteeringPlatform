import React from 'react'

export const formOrgAgregarEvento = () => {

const [fromattedDate, setFormattedDate] = useState("");
  const [time, setTime] = useState("");

  const changeDateFormat = (e) => {
    // Obtener el valor del input
    const dateValue = e.target.value;

    // Dividir la fecha en año, mes y dia
    const dateParts = dateValue.split("-");
    console.log(dateParts)
    // Formatear la fecha como dd/mm/yyyy
    const formatted =  `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

    // Actualizar el estado con la fecha formateada
    setFormattedDate(formatted);
  };

  const handleTimeChange = (e) => {
    // Actualizo el estado con la hora seleccionada
    setTime(e.target.value);
    
  return (
    <div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Nombre del evento</label>
        <input type="name" className="form-control" id="exampleFormControlInput1"></input>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Descripcion del evento</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Lugar del evento</label>
        <input type="location" className="form-control" id="exampleFormControlInput1"></input>
      </div>

      <div className='mb-3'>
      <h2>Date Format dd/mm/yyyy</h2>
      {/* input date */}
      <input type="date" onChange={changeDateFormat} />
      <input type="time" value={time} onChange={handleTimeChange} /><p>El formato de hora es 24 horas</p>
      {/* Mostrar fecha en formato dd/mm/yyyy */}
      <p> Fecha en formato dd/mm/yyyy: <span>{fromattedDate}</span></p>
      {/* Mostrar hora seleccionada */}
      <p> Hora seleccionada: <span>{time ? time : 'Ninguna'}</span></p>
    </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Cuántos días?</label>
        <input type="location" className="form-control" id="exampleFormControlInput1"></input>
      </div>


    </div>

  )
}