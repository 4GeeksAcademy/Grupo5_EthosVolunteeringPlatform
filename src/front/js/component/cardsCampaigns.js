import React from 'react';
import { Link } from 'react-router-dom';

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

    const createEvent = async (data) => {
    const timeZone = "America/Costa_Rica"
    const token = localStorage.getItem('token') 

console.log(`${data.event_start_date_time}T${data.event_time}`)
      const eventObj = {
          summary : data.name,
          location : data.location,
          description : data.description,
          start: {
            dateTime: `${data.event_start_date_time}T${data.event_time}:00`,
            timeZone: timeZone,
          },
          end: {
            dateTime: `${data.event_end_date_time}T${data.event_end_time}:00`,
            timeZone: timeZone,
          },
          reminders:{
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
            headers: { 'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}` },
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
            <div className="container">

                <div className="row g-4 justify-content-md-center align-items-center">
  
                        <div className="col-lg col-md">
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top img-fluid" src="https://placehold.co/400" style={imgStyle} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title text-dark"> {event.name} </h5>
                                <p className="card-text text-dark"> {event.description} </p>
                                <p className="card-text text-dark "> <small className='bold'>Hora: {event.event_time}</small>  </p> 
                                <p className="card-text text-dark "> <small className='bold'> Fecha:</small> <small> Desde de {event.event_start_date_time} hasta {event.event_end_date_time} </small>  </p>
                                <p className="card-text text-dark "> <small className='bold'> Localidad:</small> <small>{event.location}</small>  </p>
                              
                                    <div className="card-button btn btn-primary" onClick={() => {createEvent(event)}}>Agendar</div>
                                
                            </div>
                        </div>
                    </div>
              



                </div>
            </div>

        </>
    )
}




