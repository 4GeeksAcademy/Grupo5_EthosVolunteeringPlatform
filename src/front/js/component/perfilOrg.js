import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalEvent } from './modal/addEvent';
import { Context } from '../store/appContext';
import {FatFooter} from './fatFooter';
import { useContext } from 'react';
import { CardsCampaigns } from './cardsCampaigns';

const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};


const PerfilOrg = () => {

    //Create New Event Modal
    const { store, actions } = useContext(Context);

    // llamar store y el array orgEvenList
    // crear una var que contenga lo que viene de store, digamos que se llama "data"
    // con data se podría poblar cards de evento


    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }



    useEffect(() => {
        actions.getOrgEvents()
    }, [])

    return (
        <>
            <div className='container-perfil mb-5'>
                <div>
                    <h1>Mi Perfil</h1>
                </div>

                <div className='row mt-5'>
                    <div className='col-6'>
                        <h4>Mis eventos</h4>
                        <p>En esta sección puedes añadir nuevos eventos que serán publicados en la plataforma ETHOS. Así nuestros voluntarios podrán agendar tus campañas en su Google Calendar.</p>
                        <p>Si necesitas asistencia, <Link to={"/Contacto"}>contáctanos</Link>.</p>
                    </div>

                    <div className='col-6'>
                        <div>

                            <button type="button" onClick={() => setModal(true)} className="add-event btn">Crear envento</button>




                        </div>

                    </div>

                </div>

                <div className='row'>
                    <div className='col mt-3 d-flex'>

                {
                    store.events.map((event, index) => {
                        return <CardsCampaigns key={event.name} event={event} />
                    })
                }
                    </div>
                </div>


                
            </div>

            <div className='mt-5'><FatFooter /></div>
            <ModalEvent toggle={toggle} modal={modal} />

            
        </>
    )
}

export default PerfilOrg