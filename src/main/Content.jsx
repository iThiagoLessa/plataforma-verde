import React from "react";
import Formulario from "../components/Formulario";
import "./Content.css";
import ImageLogo from "../assets/img/plataforma-verde.png";

const Content = () => {
    return(
        <section className="content">
            <div className="header">
                <img src={ImageLogo} alt="Logo Plataforma Verde" />
            </div>
            <Formulario />
        </section>
    );
}

export default Content;