import React from 'react'

export const ContactForm = () => {
  return (
    <div>
      <div className='form-wrapper-contact container mt-5'>
        <form >
          <div className='row mt-4'>
            <div className='form-header col'>
              <h3>¡Bienvenido a <strong>ETHOS</strong>!</h3>
              <h6 className='mb-4'>¿Sientes curiosidad sobre nosotros? Te invitamos a contactarnos, estaremos felices de resolver tus dudas.</h6>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input name="organization_name" className="form-control" required></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input name="email" className="form-control" placeholder="name@example.com" required></input>
          </div>
          <select className="form-select color-text my-3" aria-label="Default select example">
            <option selected>Tema a consultar</option>
            <option value="1">Campañas</option>
            <option value="2">Sobre partnership program</option>
            <option value="3">Otro</option>
          </select>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="row">
            <div className='col-sm-12 mt-1 text-center'>
              <button type='submit' className='submit-button btn'>Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
