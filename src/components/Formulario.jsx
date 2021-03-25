import React, { Component } from "react";
import Table from "./Table";
import "./Formulario.css";

class Formulario extends Component {
    
    constructor() {
        super();
        this.state = {
            pessoa: [
                {
                  nome: "Thiago",
                  data: "01/01/1965",
                  idade: 30,
                  estado: "SP",
                  cidade: "São paulo",
                }
              ]
        }
    }

    render() {
        return(
            <div>
                <form className="form-cadastro">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" name="nome" />
                    </div>
                    <div>
                        <label htmlFor="date">Data de Nascimento</label>
                        <input id="date" type="date" name="data" />
                    </div>
                    <div>
                        <label htmlFor="state">Estado</label>
                        <select id="state">
                            <option>Selecione o estado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <select id="city" disabled>
                            <option>Selecione a cidade</option>
                        </select>
                    </div>
                    <button className="button-cadastro">Adicionar</button>
                </form>
                <Table line={this.state.pessoa} />
            </div>
        )
    }
}

export default Formulario;