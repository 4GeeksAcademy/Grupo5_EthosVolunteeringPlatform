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

export const CardsCampaigns = ({ item }) => {

    const createEvent = async (data) => {
        const event = {
          summary : data.title,
          location : data.location,
          description : data.description,
          start: {
            dateTime: startDateTime,
            timeZone,
          },
          end: {
            dateTime: endDateTime,
            timeZone,
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
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
                    {item.map((val) => (
                        <div className="col-lg col-md" key={val.id}>
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top img-fluid" src={val.img} style={imgStyle} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title text-dark"> {val.title} </h5>
                                <p className="card-text text-dark"> {val.description} </p>
                                <p className="card-text text-dark "> <small className='bold'>{val.organization}</small>  </p>
                                <p className="card-text text-dark "> <small className='bold'> Fecha:</small> <small>{val.date}</small>  </p>
                                <p className="card-text text-dark "> <small className='bold'> Duración:</small> <small>{val.duration}</small>  </p>
                                <Link to=''>
                                    <div className="card-button btn btn-primary">Agendar</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ) )}



                </div>
            </div>

        </>
    )
}




