import React from 'react';
import { MainBanner } from "../component/mainBanner";
import { AuxiliarWhiteThree } from '../component/auxiliarWhiteThree';
import { ImpactCounter } from "../component/impactCounter";
import { FatFooter } from "../component/fatFooter";


export const Acerca = () => {
  return (
    <div className="text-center mt-5">

      <MainBanner />

      <div className='mt-4 mb-5'>
        <AuxiliarWhiteThree />
      </div>

      <div className='mt-4 mb-5'>
        <h3>***Falta slider de "Historia"***</h3>
      </div>

      <div className='mt-4 mb-5'>
        <ImpactCounter />
      </div>



      <FatFooter />
      <a href="https://api.whatsapp.com/" class="float" target="_blank">
        <i class="fab fa-whatsapp my-float"></i>
      </a>

    </div>
  )
}
