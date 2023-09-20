import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { VolunteersBannerCopy } from "../component/volunteersBannerCopy";
import { SearchFilter } from '../component/searchFilter';
import { AuxiliarPurpleTwo } from '../component/auxiliarPurpleTwo';
import { CardsCampaigns } from '../component/cardsCampaigns';
import { FatFooter } from "../component/fatFooter";
import { Context } from '../store/appContext';

export const Campaign = () => {

  const { store, actions } = useContext(Context);

  

  const [item, setItem] = useState(store.allEvents); //populate cards
  const filterItems = [... new Set(store.allEvents.map((val) => val.category))] // show categories for filter search
  const filterSearch = (cat) => {
    const newItems = store.allEvents.filter((newval => newval.category === cat)) // filter by categories and show filtered
    setItem(newItems)
  }

  useEffect(() => {
    setItem(store.allEvents)
  }, [store.allEvents])

  return (
    <>
      <div className="text-center mt-5">

        <div className='mt-5 mb-5'>
          <VolunteersBannerCopy />
        </div>

        <div>
          <SearchFilter
            filterItems={filterItems} // show catoegories in buttons
            filterSearch={filterSearch} // filter cards by category
            setItem={setItem} // retrieve filtered cards by category
          />

        </div>

        <div className='mb-5'>
          <div className='container card-grid'>
            {
              item.map((event, index) => {
                return <CardsCampaigns key={event.name} event={event}/>
              })
            }
          </div>
        </div>


        
          <AuxiliarPurpleTwo />
        

        <FatFooter />
        <a href="https://api.whatsapp.com/" className="float" target="_blank">
          <i className="fab fa-whatsapp my-float"></i>
        </a>

        
      </div>
    </>
  )
}
