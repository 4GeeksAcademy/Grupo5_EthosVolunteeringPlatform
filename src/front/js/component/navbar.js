import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light nav-style mt-4 mb-0" >
				<div className="container-fluid ms-5">
					<Link to={"/"}>
						<div className="navbar-brand brand-text" href="#"><img src={logo} width="190px"></img></div>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="wrapper collapse navbar-collapse align-self-end" id="navbarSupportedContent">
						<ul className="navbar-nav mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to={"/Acerca"} style={{ textDecoration: 'none' }}>
									<div className="nav-link " aria-current="page" href="#">Sobre nosotros</div>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Impacto"} style={{ textDecoration: 'none' }}>
									<div className="nav-link" aria-current="page" href="#">Impacto</div>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Causas"} style={{ textDecoration: 'none' }}>
									<div className="nav-link" aria-current="page" href="#">Causas</div>
								</Link>
							</li>

							<li className="nav-item">
								<Link to={"/Campaign"} style={{ textDecoration: 'none' }}>
									<div className="nav-link" aria-current="page" href="#">Campañas</div>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Organizaciones"} style={{ textDecoration: 'none' }}>
									<div className="nav-link" aria-current="page">Partnerships</div>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Contacto"} style={{ textDecoration: 'none' }}>
									<div className="nav-link" aria-current="page">Contacto</div>
								</Link>
							</li>

							<button className="btn login" type="button">
								Ingresar
							</button>


							<div className="dropdown">
								<button className="btn join dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									Registrarse
								</button>
								<ul className="dropdown-menu">
									<Link to={"/UnirseOrganizacion"} style={{ textDecoration: 'none' }}>
										<li><div className="dropdown-item join-login-text" href="#">Como organización</div></li>
									</Link>
									<Link to={"/UnirseVoluntario"} style={{ textDecoration: 'none' }}>
										<li><div className="dropdown-item join-login-text" href="#">Como voluntario</div></li>
									</Link>
								</ul>
							</div>

						</ul>
					</div>
				</div>
			</nav >
		</>
	);
};
