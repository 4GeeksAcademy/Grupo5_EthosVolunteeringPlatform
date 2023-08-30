import React from 'react';
import sponsor from '../../img/sponsor.png';

export const Sponsors = () => {
  return (
    <>
            <div className='container white-space'>
                <div className='row '>
                    <div className='col-sm-6'>
                            <img src={sponsor} width="480px"></img>
                    </div>
                    <div className='col-sm-6'>
                        <h1 className='impact-message text-dark'>¡Muchas gracias a quienes nos patrocinan!</h1>
                    </div>
                </div>
            </div>
        </>
  )
}
