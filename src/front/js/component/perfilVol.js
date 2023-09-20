import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaqAccordion } from './modal/faq';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { FatFooter } from './fatFooter';

const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};


const PerfilVol = () => {

    //Create New Event Modal
    const { store, actions } = useContext(Context);




    return (
        <>
            <div className='container mt-5 '>
                <div className=' ms-2'>
                    <h1>Mi Perfil</h1>
                </div>

                <div className='row mt-5 justify-content-space-between'>
                    <div className='col'>
                        <h4 className='mb-4'>¡Bienvenid@ a nuestra red de volntari@s!</h4>
                        <p>Cuando ingresas a nuestra plataforma podrás encontrar campañas que están reclutando a personas voluntarias a lo largo del territorio nacional. Estas campañas son organizadas por una red de ONGs, fundaciones, instituciones y colectivos que trabajan por causas de Ambiente, Cultura, Salud y Bienestar. ETHOS actúa como promotor de campañas de voluntariado y como un facilitador de la comunicación entre organizaciones aliadas y voluntarios. <strong>Cambios de itinerario o cancelación de eventos son responsabilidad del ente orgranizador</strong>.</p>
                        <p>Si te interesa algún evento, haz click en "agendar" y aparecerá en tu Google Calendar.</p>
                        <p>Si necesitas asistencia, <Link to={"/Contacto"}>contáctanos</Link>.</p>

                        <Link to={"/Campaign"}>
                            <button type="button" className="go-campaign-profile btn m-0 mt-2">Buscar campañas</button>
                        </Link>
                    </div>
                </div>


                <div className='row mt-5'>

                    <h4 className='mt-4 mb-5'>Preguntas frecuentes</h4>

                    <FaqAccordion />

                </div>

            </div>
            <div className='mt-5'><FatFooter /></div>


        </>
    )
}

export default PerfilVol