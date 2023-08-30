import React from 'react';
import { MainBanner } from "../component/mainBanner";
import { ImpactCounter } from "../component/impactCounter";
import { AuxiliarGreenOne } from '../component/auxiliarGreenOne';
import { CausasCards } from "../component/causasCards";
import { FatFooter } from "../component/fatFooter";

export const Impacto = () => {
  return (
    <>
      <div className="text-center mt-5">
        <MainBanner />

        <div className='mt-4 mb-5'>
          <ImpactCounter />
        </div>

        <div className='mt-4 mb-5'>
          <AuxiliarGreenOne />
        </div>

        <div className='mt-4 mb-5'>
        <h3>***Estas cards son mockups para idea visual***</h3>
          <CausasCards />
        </div>

        <FatFooter />
        <a href="https://api.whatsapp.com/" class="float" target="_blank">
          <i class="fab fa-whatsapp my-float"></i>
        </a>

      </div>
    </>
  )
}
