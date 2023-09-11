import React from 'react';
import logowhite from '../../img/logowhite.png';
import { Link } from "react-router-dom";


export const PartnersBanner = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide hero-partnerships fullwidth" data-bs-ride="carousel">

        
        <div className="custom-shape-divider-top-1693265318">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white banner-text">
            <img  src={logowhite} width="665px"></img>
            <h5 className="mb-3 mt-3 banner-description fade-in-top">Las asociaciones son el núcleo de nuestra filosofía en ETHOS. A medida que avanzamos, continuamos buscando oportunidades para colaborar, innovar y crecer junto con nuestros valiosos socios.</h5>
            <Link to='/Organizaciones'>
            <button className="cta-button-alt btn-lg mt-3 mb-5" href="#!" role="button">PARTNERSHIPS</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
