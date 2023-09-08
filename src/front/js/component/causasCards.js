import React from 'react';
import { Link } from 'react-router-dom';



const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};

export const CausasCards = () => {
    return (
        <>
            <div className="container-xxl pt-5 pb-3 white-space">
                <div className="container">

                    <div className="row g-4 justify-content-md-center align-items-center">

                        <div className="col-lg-3 col-md-4">
                            <div className="card" style={cardStyle}>
                                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1551855350-c86caeaf8707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Medioambiente</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='/MedioAmbiente'>
                                    <div href="#" className="card-button btn btn-primary">LEER MÁS...</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 ">
                            <div className="card" style={cardStyle}>
                                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1504685723432-f3f005135e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Sociedad y Cultura</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-button btn btn-primary">LEER MÁS...</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                        <div className="card" style={cardStyle}>
                                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1576765974102-b756026ecee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Salud y Bienestar</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-button btn btn-primary">LEER MÁS...</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

