import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light nav-style mt-4 mb-0" >
				<div className="container-fluid ms-5">
					<Link to={"/"}>
						<a className="navbar-brand brand-text" href="#"><img src={logo} width="190px"></img></a>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="wrapper collapse navbar-collapse align-self-end" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">

							<li className="nav-item">
								<Link to={"/Acerca"} style={{ textDecoration: 'none' }}>
									<a className="nav-link " aria-current="page" href="#">Sobre nosotros</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Impacto"} style={{ textDecoration: 'none' }}>
									<a className="nav-link" aria-current="page" href="#">Impacto</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Causas"} style={{ textDecoration: 'none' }}>
									<a className="nav-link" aria-current="page" href="#">Causas</a>
								</Link>
							</li>
	
							<li className="nav-item">
								<Link to={"/Campaign"} style={{ textDecoration: 'none' }}>
									<a className="nav-link" aria-current="page" href="#">Campañas</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Organizaciones"} style={{ textDecoration: 'none' }}>
									<a className="nav-link" aria-current="page">Partnerships</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/Contacto"} style={{ textDecoration: 'none' }}>
									<a className="nav-link" aria-current="page">Contacto</a>
								</Link>
							</li>
							<button type="button" class="btn login btn-primary ms-4">Login</button>
							<button type="button" class="btn join btn-primary ms-2">Unirse</button>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
