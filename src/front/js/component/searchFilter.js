import React, { useContext } from 'react';
import { Context } from '../store/appContext';


export const SearchFilter = ({filterItems, filterSearch, setItem}) => {
    const { store, actions } = useContext(Context);
    const DataCampaign = store.allEvents
    return (
        <>
            <div className="container mt-5 mb-5 pb-3 pt-5">
                <h2 className='text-dark'>Explorar campañas</h2>
                <p className='text-dark'>Filtre la búsqueda por tema de causa.</p>
                <div className="d-flex justify-content-center">
                   {
                    filterItems.map( (val) => (
                        <button className='bnt filter-button'
                        onClick={() => filterSearch(val)}> {val} </button>
                    ))
                   }
                   <button className='bnt filter-button'
                   onClick={() => setItem(DataCampaign)}> Todos </button>
                </div>
                
            </div>
        </>
    )
}
