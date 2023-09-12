import React from 'react';
import { useState } from 'react';
import { VolunteersBannerCopy } from "../component/volunteersBannerCopy";
import { SearchFilter } from '../component/searchFilter';
import { AuxiliarPurpleTwo} from '../component/auxiliarPurpleTwo';
import DataCampaign from '../component/DataCampaign';
import { CardsCampaigns } from '../component/cardsCampaigns';
import { FatFooter } from "../component/fatFooter";

export const Campaign = () => {

  const [item, setItem] = useState(DataCampaign); //pupulate cards
  const filterItems = [... new Set(DataCampaign.map((val) => val.category))] // show categories for filter search
  const filterSearch = (cat) => {
    const newItems = DataCampaign.filter((newval => newval.category === cat))
    setItem(newItems)
  }

  return (
    <>
      <div className="text-center mt-5">

        <div className='mt-5 mb-5'>
          <VolunteersBannerCopy />
        </div>

        <div>
          <SearchFilter 
            filterItems = {filterItems}
            filterSearch = {filterSearch}
            setItem = {setItem}
          />
        </div>

        <div>
        <CardsCampaigns item={item}/>
        </div>

        <div className='mt-5'>
          <AuxiliarPurpleTwo />
        </div>

        <FatFooter />
        <a href="https://api.whatsapp.com/" className="float" target="_blank">
          <i className="fab fa-whatsapp my-float"></i>
        </a>


      </div>
    </>
  )
}
