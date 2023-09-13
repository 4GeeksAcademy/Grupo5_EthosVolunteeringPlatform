import React from 'react';
import { Link } from 'react-router-dom';
import { FatFooter } from "../component/fatFooter";


const infoPartner = () => {
    return (
        <div>
            <div className='container-jumbotron '>
                <div className='row m-0'>
                    <div className='container col-6'>
                        <img className="custom-img ps-3 pt-3" src={`https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg`} alt="img" />
                    </div>
                    <div className='col-6' >
                        <div className='row ms-5 mt-3 justify-content-left'>
                            <h1 className='mx-3'>Únete a Nuestra Comunidad</h1>
                        </div>
                        <div className='container row p-3 ms-5 text-dark'>
                            <p>Nuestra plataforma busca ser el puente entre organizaciones apasionadas y voluntarios entusiastas dispuestos a hacer la diferencia. Al forjar alianzas con organizaciones como la suya, no solo ampliamos nuestro impacto, sino que también fortalecemos la red de cambio positivo en el mundo. Únase a nosotros y descubra cómo, juntos, podemos crear un mañana más brillante y sostenible.</p>
                            <Link to={"/Organizaciones"} style={{ textDecoration: 'none' }}>
                                <i className='fas fa-arrow-alt-circle-left'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-5 m-5'>
                    <h1>¿Te interesa saber los requisitos y beneficios?</h1>
                    <p>Para más información te invitamos a contactarte por medio de nuestro formulario.</p>
                    <Link to={"/Contacto"} style={{ textDecoration: 'none' }}>
                        <button className="btn login" type="button">
                            Contáctenos 
                        </button>
                    </Link>
                </div>
            </div>
            <FatFooter />
        </div>
    )
}

export default infoPartner