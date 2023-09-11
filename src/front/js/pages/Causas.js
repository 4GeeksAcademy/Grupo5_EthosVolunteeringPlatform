import React from 'react';
import { CausasCards } from "../component/causasCards";
import { FatFooter } from "../component/fatFooter";
import { AuxiliarBlueOne } from '../component/auxiliarBlueOne';
import { AuxiliarWhiteFour } from '../component/auxiliarWhiteFour';
import { CampaignBannerCopy } from '../component/campaignBannerCopy';

export const Causas = () => {
  return (
    <>
      <div className="text-center mt-5">

        <div>
          <CampaignBannerCopy/>
        </div>

        <div className='mt-4'>
          <AuxiliarWhiteFour/>
        </div>
        

        <div>
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
