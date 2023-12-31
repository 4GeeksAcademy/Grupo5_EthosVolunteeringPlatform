import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import { Acerca } from "./pages/Acerca";
import { Impacto } from "./pages/Impacto";
import { Causas } from "./pages/Causas";
import { Campaign } from "./pages/Campaign";
import { Organizaciones } from "./pages/Organizaciones";
import { Contacto } from "./pages/Contacto";
import { UnirseOrganizacion } from "./pages/UnirseOrganizacion";
import { UnirseVoluntario } from "./pages/UnirseVoluntario";




import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Ingresar } from "./pages/Ingresar";
import InfoAmbiente from "./component/infoAmbiente";
import InfoSalud from "./component/infoSalud";
import InfoSociedad from "./component/infoSociedad";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Acerca />} path="/Acerca" />
                        <Route element={<Impacto />} path="/Impacto" />
                        <Route element={<Causas />} path="/Causas" />
                        <Route element={<Campaign />} path="/Campaign" />
                        <Route element={<Organizaciones />} path="/Organizaciones" />
                        <Route element={<Contacto />} path="/Contacto" />
                        <Route element={<Ingresar />} path="/Ingresar" />
                        <Route element={<UnirseOrganizacion />} path="/UnirseOrganizacion" />
                        <Route element={<UnirseVoluntario />} path="/UnirseVoluntario" />
                        <Route element={<InfoAmbiente/>} path="/MedioAmbiente"/>
                        <Route element={<InfoSalud/>} path="/SaludyBienestar"/>
                        <Route element={<InfoSociedad/>} path="/SociedadyCultura"/>
                        <Route element={<Demo />} path="/demo" />
                        
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
