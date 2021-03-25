import React from "react";
import Formulario from "../components/Formulario";
import "./Content.css";

const Content = () => {
    return(
        <section className="content">
            <div className="header">
                <img src="../assets/img/plataforma-verde-logo-png" alt="Logo Plataforma Verde" />
            </div>
            <Formulario />
        </section>
    );
}

export default Content;