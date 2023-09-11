import React from 'react';
import CountUp from 'react-countup';



export const ImpactCounter = () => {


    return (
        <>
            <div className='container white-space'>
                <div className='row mt-5'>
                    <div className='col-sm-6'>

                        <div className="d-flex align-items-center border-start border-5 border-dark px-3 mt-5">
                            <h1 className="flex-shrink-0 display-5 counter-deco mb-0 custom_font" data-toggle="counter-up"> <CountUp end={837} duration={4} delay={0} enableScrollSpy/> </h1>
                            <div className="ps-4">
                            <h3 className="text-uppercase mb-0">VOLUNTARIOS</h3>
                            </div>
                           
                        </div>

                        <div className="d-flex align-items-center border-start border-5 border-dark px-3 mt-5">
                            <h1 className="flex-shrink-0 display-5 counter-deco mb-0 custom_font" data-toggle="counter-up"> <CountUp end={984} duration={4} delay={0} enableScrollSpy /></h1>
                            <div className="ps-4">
                            <h3 className="text-uppercase mb-0 ">HORAS DONADAS</h3>
                            </div>
                            
                        </div>

                        <div className="d-flex align-items-center border-start border-5 border-dark px-3 mt-5">
                            <h1 className="flex-shrink-0 display-5 counter-deco mb-0 custom_font " data-toggle="counter-up"> <CountUp end={102} duration={4} delay={0} enableScrollSpy/> </h1>
                            <div className="ps-4">
                            <h3 className="text-uppercase mb-0  ms-3">FUNDARAISINGS</h3>
                            </div>    
                        </div>

                        <div className="d-flex align-items-center border-start border-5 border-dark px-3 mt-5">
                            <h1 className="flex-shrink-0 display-5 counter-deco mb-0 counter-deco custom_font" data-toggle="counter-up"> <CountUp end={138} duration={4} delay={0} enableScrollSpy/> </h1>
                            <div className="ps-4">
                            <h3 className="text-uppercase mb-0  ms-3">PARTNERSHIPS</h3>
                            </div>    
                        </div>


                    </div>
                    <div className='col-sm-6'>
                        <h1 className='impact-message text-dark'>¡Todo es posible si unimos esfuerzos!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
