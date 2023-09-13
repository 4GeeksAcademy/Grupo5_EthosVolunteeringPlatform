import React, { useState } from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';


export const UpdatePsw = () => {
    const { store, actions } = useContext(Context);
    const [queryParams]= useSearchParams()
    const token= queryParams.get('token')
    // const [data, setData]= useState({})
    const data= {
        password: store.password ?? ''
    }


    return (
        <>
            <div className='form-wrapper-org container mt-5'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.updatePassword(token, data)
                    e.target.reset()
                }}>
                    <div className='row mt-4'>
                        <div className='form-header col'>
                            <h3 className='text-dark'>Recuperación de contraseña</h3>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Nueva contraseña</label>
                        <input name="password" type="password" onChange={actions.handleChange} className="form-control" placeholder="escribe tu contrseña" required></input>
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
