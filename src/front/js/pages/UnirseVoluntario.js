import React from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react';

export const UnirseVoluntario = () => {
  const { store, actions } = useContext(Context);
  const data= {
					name: store.name ?? '',
          last_name: store.last_name ?? '',
					email: store.email ?? '',
					password: store.password ?? ''
  }

  return (
    <>
      <div className='form-wrapper-vol container mt-5'>
        <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.fetchSignup(data)
                    e.target.reset()
                }}>
          <div className='row '>
            <div className='form-header col'>
              <h3 className='text-dark'>¡Bienvenido a ETHOS!</h3>
              <h6 className='text-dark mb-4'>Forma parte de nuestra red de voluntarios</h6>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Nombre</label>
            <input name="name" onChange={actions.handleChange} className="form-control" required></input>
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Apellido</label>
            <input name="last_name" onChange={actions.handleChange} className="form-control" required></input>
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
            <div className='col-sm-12 mt-2 text-center'>
              <button type='submit' className='submit-button btn'>Unirse</button>
            </div>
          </div>


        </form>
      </div>
    </>
  )
}
