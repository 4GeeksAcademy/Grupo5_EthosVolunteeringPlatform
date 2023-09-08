import React from 'react';
import { Link } from "react-router-dom";
import logofooter from "../../img/logofooter.png";

export const FatFooter = () => {
    return (
        <>
            <div className="container-fluid footer-color fullwidth footer pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className=" text-start text-light fw-normal mb-4">Mapa del sitio</h4>
                            <Link to={"/"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Inicio</p>
                            </Link>
                            <Link to={"/Acerca"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Sobre nosotros</p>
                            </Link>
                            <Link to={"/Impacto"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Impacto</p>
                            </Link>
                            <Link to={"/Causas"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Causas</p>
                            </Link>
                            <Link to={"/Campaign"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Campañas</p>
                            </Link>
                            <Link to={"/Organizaciones"} style={{ textDecoration: 'none' }}>
                                <p className="text-start text-light">Partnerships</p>
                            </Link>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className=" text-start text-light fw-normal mb-4 ">Contacto</h4>
                            <p className="mb-3 text-start"><i className="fa fa-map-marker-alt me-3"></i>San José, Costa Rica</p>
                            <p className="mb-3 text-start"><i className="fa fa-phone-alt me-3"></i>(+506) 2345 6755</p>
                            <p className="mb-3 text-start"><i className="fa fa-envelope me-3"></i>info@ethos.org</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="https://api.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.tiktok.com/" target="_blank"><i className="fab fa-tiktok"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-start text-light fw-normal mb-4">Horario</h4>
                            <p className="text-start text-light fw-normal">Lunes - Viernes</p>
                            <p className="text-start">9AM - 4PM</p>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <img className='img-fluid mb-3 float-left' src={logofooter} width="200px"></img>

                            <div className="floating">
                                <Link to='/UnirseVoluntario'>
                                <button type="button" className="btn join-footer btn-primary ms-2">Únete</button>
                                </Link>
                            </div>
                        </div>



                    </div>


                    <div className='row g-5 justofy-content-center'>
                        <div className="col-md text-center text-md-center mb-3 mb-md-2">
                            <div className="border-top mt-1"></div>
                        
                            <p className='mt-3 text-light'>Ethos Volunteering Website. Designed by 4Girls.</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

