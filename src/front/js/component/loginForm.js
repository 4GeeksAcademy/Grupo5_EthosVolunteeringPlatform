import React from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div>
            <div className='form-wrapper-org container mt-5'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.fetchLogin()
                    e.target.reset()
                    navigate("/PerfilOrg")
                }}>
                    <div className='row mt-4'>
                        <div className='form-header col'>
                            <h3 className='text-dark'>Inicio de sesión</h3>
                            <h6 className='text-dark mb-4'>¡Bienvenido a ETHOS!</h6>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Email</label>
                        <input name="email" onChange={actions.handleChange} className="form-control" placeholder="name@example.com" required></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-dark">Contraseña</label>
                        <input name="password" type="password" onChange={actions.handleChange} className="form-control" placeholder="**********" required></input>
                    </div>

                    <div className="row">
                        <div className='col-sm-12 mt-4 text-center'>
                            <button type='submit' className='submit-button btn'>Ingresar</button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <Link to={'/recover-psw'}>
                            <p className='psw-style link-primary'>Recuperar contraseña</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};