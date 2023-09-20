import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const cardStyle = {
  width: "18rem",
  background: "#ffffff",
  textAlign: "center"
};

const imgStyle = {
  width: "18rem",
  height: "10rem"
}

export const CardsCampaigns = ({ event }) => {

  const { store, actions } = useContext(Context);
  const auth = localStorage.getItem('token')

  const createEvent = async (data) => {
    const timeZone = "America/Costa_Rica"
    const token = localStorage.getItem('token')


    console.log(`${data.event_start_date_time}T${data.event_time}`)
    const eventObj = {
      summary: data.name,
      location: data.location,
      description: data.description,
      start: {
        dateTime: `${data.event_start_date_time}T${data.event_time}:00`,
        timeZone: timeZone,
      },
      end: {
        dateTime: `${data.event_end_date_time}T${data.event_end_time}:00`,
        timeZone: timeZone,
      },
      reminders: {
        'useDefault': false,
        'overrides': [
          { 'method': 'email', 'minutes': 24 * 60 },
          { 'method': 'popup', 'minutes': 10 }
        ]
      }
    };
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/create-event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(eventObj)
      });
      const data = await response.json();
      if (response.status === 403) {
        window.location.href = data.authorization_url;
      } else if (response.status === 500) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error al crear el evento:', error);
    }
  };

  return (
    <>
      <div className="container-xxl pt-5 pb-3">
        <div className="container">

          <div className="row g-4 justify-content-md-center align-items-center">

            <div className="col-lg-3 col-md-4">
              <div className="card" style={cardStyle}>
                <img className="card-img-top img-fluid" src={event.event_img} style={imgStyle} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title text-dark"> {event.name} </h5>
                  <p className="card-text text-dark"> <small className='bold'> Organizado por: </small> <small>{event.org_name}</small>  </p>
                  <p className="card-text text-dark"> <small> {event.description} </small>  </p>
                  <p className="card-text text-dark "> <small className='bold'>Hora: </small> <small>{event.event_time} - {event.event_end_time}</small> </p>
                  <p className="card-text text-dark "> <small className='bold'> Fecha:</small> <small> Desde de {event.event_start_date_time} hasta {event.event_end_date_time} </small>  </p>
                  <p className="card-text text-dark "> <small className='bold'> Localidad:</small> <small>{event.location}</small>  </p>


                  {
                    auth ?

                      <div>
                        <div className="card-button btn btn-primary" onClick={() => { createEvent(event) }}>Agendar</div>
                        <div className="card-button btn btn-primary" onClick={() => actions.fetchDeleteEvent()}>Eliminar</div>
                        
                      </div>
                      :
                      <div><p><small className="text-muted">Inicie sesión para agendar</small></p></div>
                      }


                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

    </>
  )
}




