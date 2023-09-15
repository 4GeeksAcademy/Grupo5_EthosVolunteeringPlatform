import React from 'react'
import { Link } from 'react-router-dom'


const perfilOrg = () => {
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
                                <button type="button" className="add-event btn btn-danger">Crear envento</button>
                    </div>
                </div>
                
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <i className='fas fa-arrow-alt-circle-left'></i>
                </Link>
                
            </div>
        </>
    )
}

export default perfilOrg