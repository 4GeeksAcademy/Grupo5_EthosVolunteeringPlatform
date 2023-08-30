import React from 'react';

export const SearchFilter = () => {
    return (
        <>
            <div class="container">
                <h2 className='text-dark'>Explorar campañas</h2>
                <p className='text-dark'>Filtre la búsqueda por tema o fecha.</p>
                <div class="dropdown">
                    <button class="filter-button btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Por tema
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Ambiente y conservación</a></li>
                        <li><a class="dropdown-item" href="#">Sociedad y cultura</a></li>
                        <li><a class="dropdown-item" href="#">Salud y bienestar</a></li>
                    </ul>

                    <button class="filter-button btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Por fecha
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Septiembre</a></li>
                        <li><a class="dropdown-item" href="#">Octubre</a></li>
                    </ul>


                </div>
            </div>
        </>
    )
}
