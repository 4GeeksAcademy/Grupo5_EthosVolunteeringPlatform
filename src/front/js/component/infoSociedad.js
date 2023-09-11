import React from 'react'

const infoSociedad = () => {
    return (
        <div className='container-jumbotron'>
            <div className='row m-0'>
                <div className='container col-6'>
                    <img className="custom-img ps-3 pt-3" src={`https://images.unsplash.com/photo-1504685723432-f3f005135e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80`} alt="img" />
                </div>
                <div className='col-6 text-center' >
                    <div className='row ms-5'>
                        <h1>Sociedad y Cultura</h1>
                    </div>
                    <div className='container row p-3 ms-5 text-dark'>
                        <p>En un mundo globalizado, proteger y promover la diversidad cultural es esencial. Voluntarios comprometidos con la sociedad y la cultura trabajan en museos, organizan festivales, promueven el arte y la literatura, y más. A través de estas acciones, se busca no solo conservar la rica tapeza cultural de nuestra humanidad, sino también promover el entendimiento mutuo, la tolerancia y el respeto. En una sociedad diversa, el voluntariado cultural actúa como un puente, celebrando las diferencias y fomentando la unidad.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default infoSociedad