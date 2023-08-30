import React from 'react';
import { VolunteersBannerCopy } from "../component/volunteersBannerCopy";
import { SearchFilter } from '../component/searchFilter';
import { AuxiliarPurpleTwo} from '../component/auxiliarPurpleTwo'
import { FatFooter } from "../component/fatFooter";

export const Campaign = () => {
  return (
    <>
      <div className="text-center mt-5">

        <div className='mt-5 mb-5'>
          <VolunteersBannerCopy />
        </div>

        <div className='mt-5 mb-5'>
          <SearchFilter />
        </div>

        <div className='mt-5'>
          <AuxiliarPurpleTwo />
        </div>

        <FatFooter />
        <a href="https://api.whatsapp.com/" class="float" target="_blank">
          <i class="fab fa-whatsapp my-float"></i>
        </a>


      </div>
    </>
  )
}
