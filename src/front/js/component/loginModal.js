import React from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react';


export const LoginModal = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className='form-wrapper-org container mt-5'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.fetchLogin()
                    e.target.reset()
                }}>
                    <div className='row mt-4'>
                        <div className='form-header col'>
                            <h3 className='text-dark'>Recuperación de contraseña</h3>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Email</label>
                        <input name="email" onChange={actions.handleChange} className="form-control" placeholder="name@example.com" required></input>
                    </div>

                    <div className="row">
                        <div className='col-sm-12 mt-4 text-center'>
                            <button type='submit' className='submit-button btn'>Enviar</button>
                        </div>
                    </div>
                
                </form>
            </div>
        </>
    )
}
