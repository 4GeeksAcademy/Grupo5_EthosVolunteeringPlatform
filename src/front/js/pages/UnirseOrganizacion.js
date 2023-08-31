import React from 'react'

export const UnirseOrganizacion = () => {
  return (
    <>
      <div className='form-wrapper container mt-5'>
        <form>
          <div className='row mt-4'>
            <div className='form-header col'>
              <h3 className='text-dark'>¡Bienvenido a ETHOS!</h3>
              <h6 className='text-dark mb-4'>Registre a su organización</h6>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label text-dark">Nombre de la organización</label>
            <input name="organization_name" class="form-control" required></input>
          </div>
          <div class="mb-3">
            <label class="form-label text-dark">Email</label>
            <input name="email" class="form-control" placeholder="name@example.com" required></input>
          </div>
          <div class="mb-3">
            <label class="form-label text-dark">Contraseña</label>
            <input name="email" class="form-control" placeholder="**********" required></input>
          </div>

          <div className="row">
            <div className='col-sm-12 mt-4 text-center'>
              <button type='submit' className='submit-button btn'>Unirse</button>
            </div>
          </div>


        </form>
      </div>
    </>
  )
}
