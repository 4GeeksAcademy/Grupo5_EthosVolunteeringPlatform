import React from 'react'

const infoSalud = () => {
    return (
        <div className='container-jumbotron'>
            <div className='row m-0'>
                <div className='container col-6'>
                    <img className="custom-img ps-3 pt-3" src={`https://images.unsplash.com/photo-1576765974102-b756026ecee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80`} alt="img" />
                </div>
                <div className='col-6 text-center' >
                    <div className='row ms-5'>
                        <h1>Salud y Bienestar</h1>
                    </div>
                    <div className='container row p-3 ms-5 text-dark'>
                        <p>En una era donde las desigualdades sanitarias son más evidentes que nunca, el voluntariado en el ámbito de la salud es crucial. Voluntarios en todo el mundo contribuyen a campañas de vacunación, brindan apoyo psicológico, ofrecen información y educación sobre salud, y más. Estos esfuerzos no solo abordan problemas de salud física, sino que también se centran en el bienestar mental, promoviendo la importancia de una salud integral y accesible para todos.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default infoSalud