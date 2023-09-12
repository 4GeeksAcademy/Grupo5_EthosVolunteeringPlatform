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
                                    <div href="#" className="card-button btn btn-primary">Agendar</div>
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




