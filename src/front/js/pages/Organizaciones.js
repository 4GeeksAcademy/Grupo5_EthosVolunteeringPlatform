import React from 'react';
import { PartnersBanner } from '../component/partnersBanner';
import { AuxiliarWhiteFive } from '../component/auxiliarWhiteFive';
import OrganizacionesCards from '../component/OrganizacionesCards';
import { AuxiliarGreenTwo} from '../component/auxiliarGreenTwo';
import { Sponsors } from '../component/sponsors';
import { FatFooter } from "../component/fatFooter";


export const Organizaciones = () => {
  return (
    <>
      <div className='mt-4 mb-5 text-center'>
        
        <PartnersBanner />

        <div className='mt-'>
        <AuxiliarWhiteFive/>
        </div>


        <div className='mt-4 mb-5'>
          <OrganizacionesCards />
        </div>
        
        <AuxiliarGreenTwo/>
          <Sponsors />
          <FatFooter></FatFooter>
      </div>
    </>
  )
}
