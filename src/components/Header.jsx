import React from 'react';

export const Header = () => {
    return (<header className="p-3 text-bg-dark">
    <div className="container">
      <div
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="#" className="nav-link px-2 text-secondary">inicio</a></li>
          <li><a href="#" className="nav-link px-2 text-white">contacto</a></li>
          <li>
            <a href="#" className="nav-link px-2 text-white">Sobre Nosotros</a>
          </li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-primary">
            Inicia secion
          </button>
        </div>
      </div>
    </div>
  </header>)
}
