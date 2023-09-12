import React from 'react'

export const loginForm = () => {
    return (
        <div>
            <div className='form-wrapper-org container mt-5'>
                <form>
                    <div className='row mt-4'>
                        <div className='form-header col'>
                            <h3 className='text-dark'>¡Inicio de sesión</h3>
                            <h6 className='text-dark mb-4'>¡Bienvenido a ETHOS!</h6>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Email</label>
                        <input name="email" className="form-control" placeholder="name@example.com" required></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-dark">Contraseña</label>
                        <input name="email" className="form-control" placeholder="**********" required></input>
                    </div>

                    <div className="row">
                        <div className='col-sm-12 mt-4 text-center'>
                            <button type='submit' className='submit-button btn'>Iniciar</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}