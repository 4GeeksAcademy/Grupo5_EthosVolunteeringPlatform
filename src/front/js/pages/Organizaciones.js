import React from 'react'
import { PartnersBanner } from '../component/partnersBanner'
import OrganizacionesCards from '../component/OrganizacionesCards'
import { Sponsors } from '../component/sponsors'
import { FatFooter } from "../component/fatFooter";


export const Organizaciones = () => {
  return (
    <>
      <div className='mt-4 mb-5 text-center'>
        
        <PartnersBanner />

        <div className="text-white auxiliar-banner-text">
          <h1 className="mb-3 banner-maintext text-dark">Organizaciones aliadas</h1>
        </div>

        <div className='mt-4 mb-5'>
          <OrganizacionesCards />
        </div>
        <div className='auxiliar-green fullwidth'>

          <div className="custom-shape-divider-top-1693265318">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>

          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white auxiliar-banner-text">
              <h1 className="mb-3 banner-maintext">ETHOS impulsa iniciativas</h1>
              <h1 className="mb-3 banner-maintext"> con responsabilidades eticas</h1>
              <p className="mb-3 banner-description">El voluntariado es una manifestación tangible de nuestra capacidad para influir positivamente en el mundo que nos rodea. Ya sea plantando un árbol, brindando apoyo en un hospital o enseñando sobre la rica historia de una región, cada acción cuenta.</p>
              <button className="cta-button btn-lg wobble-hor-bottom" href="#!" role="button">PARTNERSHIPS</button>
            </div>
          </div>
        </div>
          <Sponsors />
          <FatFooter></FatFooter>
      </div>
    </>
  )
}
