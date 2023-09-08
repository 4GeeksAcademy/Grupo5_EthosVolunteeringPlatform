import React from 'react'

const infoSingle = () => {
    return (
    <div className='container m-4'>
        <div className='row m-0'>
            <div className='container col-6'>
                <img className="custom-img ps-3 pt-3" src={`https://images.unsplash.com/photo-1652971876875-05db98fab376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80`} alt="img" />
            </div>
            <div className='col-6 text-center' >
                <div className='row ms-5'>
                    <h1>Medio Ambiente</h1>
                </div>
                <div className='container row p-3 ms-5 text-dark'>
                    <p>Nuestro planeta enfrenta amenazas sin precedentes: desde el cambio climático hasta la pérdida de biodiversidad y la contaminación. El voluntariado ambiental se ha erigido como una respuesta a estos desafíos. A través de la reforestación, limpiezas de playas y ríos, y educación ambiental, los voluntarios están tomando medidas concretas para preservar y rehabilitar nuestro entorno. Al unirse a movimientos como el de los guardianes de la naturaleza, cualquier individuo puede contribuir a la conservación y restauración de ecosistemas, demostrando que cada acción cuenta.</p>
                </div>

            </div>

        </div>
    </div>
    )
}

export default infoSingle