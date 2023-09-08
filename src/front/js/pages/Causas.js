import React from 'react';
import { CausasCards } from "../component/causasCards";
import { FatFooter } from "../component/fatFooter";
import { AuxiliarBlueOne } from '../component/auxiliarBlueOne';
import { HistoriaBanner } from '../component/historiaBanner';

export const Causas = () => {
  return (
    <>
      <div className="text-center mt-5">

        <div>
          <HistoriaBanner/>
        </div>

        
          
            <div className="text-white auxiliar-banner-text">
              <h1 className="mb-3 banner-maintext text-dark">Juntos por el ambiente, la</h1>
              <h1 className="mb-3 banner-maintext text-dark">cultura y el bienestar</h1>
            </div>
          

        <div className=' mb-5'>
          <CausasCards />
        </div>

        <div className='mt-4'>
          <AuxiliarBlueOne />
        </div>

        <FatFooter />
        <a href="https://api.whatsapp.com/" className="float" target="_blank">
          <i className="fab fa-whatsapp my-float"></i>
        </a>

      </div>

    </>
  )
}
