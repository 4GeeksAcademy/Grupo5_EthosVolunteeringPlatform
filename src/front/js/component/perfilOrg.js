import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ModalEvent } from './modal/addEvent';

const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};



const perfilOrg = () => {

    //Create New Event Modal
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <div className='container-perfil'>
                <div>
                    <h1>Mi Perfil</h1>
                </div>

                <div className='row mt-5'>
                    <div className='col-6'>
                        <h4>Mis eventos</h4>
                        <p>En esta sección puedes añadir nuevos eventos que serán publicados en la plataforma ETHOS. Así nuestros voluntarios podrán agendar tus campañas en su Google Calendar.</p>
                        <p>Si necesitas asistencia, <Link to={"/Contacto"}>contáctanos</Link>.</p>
                    </div>

                    <div className='col'>
                        <div>
                            
                                <button type="button" onClick={() => setModal(true)} className="add-event btn btn-danger">Crear envento</button>
                            
                        </div>

                        <div className='mt-5'>

                            <div className="container">

                                <div className="row g-4 justify-content-md-center align-items-center">
                                    
                                        <div className="col-lg-3 col-md-4" >
                                            <div className="card" style={cardStyle}>
                                
                                                <div className="card-body">
                                                    <h5 className="card-title text-dark"> </h5>
                                                    <p className="card-text text-dark"> </p>
                                                    <p className="card-text text-dark ">  </p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <i className='fas fa-arrow-alt-circle-left'></i>
                </Link>

            </div>

            <ModalEvent toggle={toggle} modal={modal}/>
        </>
    )
}

export default perfilOrg