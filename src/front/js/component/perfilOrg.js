import React from 'react'
import { Link } from 'react-router-dom'


const perfilOrg = () => {
    return (
        <>
            <div className='container-perfil'>
                <div>
                    <h1>Mi Perfil</h1>
                </div>
                <div className='mt-5'>
                    <h5>Mis eventos</h5>
                </div>
                <table className="table table-dark">
                    <thead>
                        ...
                    </thead>
                    <tbody>
                        <tr className="table-active">
                            ...
                        </tr>
                        <tr>
                            ...
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2" className="table-active">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <i className='fas fa-arrow-alt-circle-left'></i>
            </Link>
            </div>
        </>
    )
}

export default perfilOrg