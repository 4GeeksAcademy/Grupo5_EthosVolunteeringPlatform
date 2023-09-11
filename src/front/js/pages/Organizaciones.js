import React from 'react';
import { useState } from 'react';
import { PartnersBanner } from '../component/partnersBanner';
import { AuxiliarWhiteFive } from '../component/auxiliarWhiteFive';
import { CardsOrgs } from '../component/cardsOrgs';
import {DataOrganizations} from '../component/DataOrganizations';
import { AuxiliarGreenTwo} from '../component/auxiliarGreenTwo';
import { Sponsors } from '../component/sponsors';
import { FatFooter } from "../component/fatFooter";


export const Organizaciones = () => {

  const [item, setItem] = useState(DataOrganizations); //pupulate cards


  return (
    <>
      <div className='mt-4 mb-5 text-center'>
        
        <PartnersBanner />

        <div className='mt-4'>
        <AuxiliarWhiteFive/>
        </div>


        <div className='mt-4 mb-5 pb-4'>
          <CardsOrgs item={item} />
        </div>
        
        <AuxiliarGreenTwo/>
          <Sponsors />
          <FatFooter></FatFooter>
      </div>
    </>
  )
}
