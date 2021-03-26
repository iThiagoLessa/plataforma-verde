import React, { Component } from "react";
import Table from "./Table";
import "./Formulario.css";

class Formulario extends Component {
  constructor() {
    super();
    this.enviarForm = this.enviarForm.bind(this);
    this.criarPessoa = this.criarPessoa.bind(this);
    this.state = {
      pessoa: [],
    };
  }

  //funçao para criar um novo objeto chamado pessoa
  criarPessoa(lista) {
    const novoObjetoPessoa = [...this.state.pessoa, lista];
    const novoArray = {
      pessoa: novoObjetoPessoa,
    };
    this.setState(novoArray);
  }

  enviarForm(event) {
    event.preventDefault();
    const form = document.forms.registration;
    const { name, date, state, city } = form;
    //dividindo a data para formata-la para o padrao
    const datePart = date.value.match(/\d+/g);
    const obj = {
      nome: name.value,
      data: `${datePart[2]}/${datePart[1]}/${datePart[0]}`,
      estado: state.value,
      cidade: city.value,
    };
    //função para alterar o estado
    this.criarPessoa(obj);
  }

  render() {
    return (
      <div>
        <form
          name="registration"
          className="form-cadastro"
          onSubmit={this.enviarForm}
        >
          <div>
            <label htmlFor="name">Nome</label>
            <input required id="name" type="text" name="nome" />
          </div>
          <div>
            <label htmlFor="date">Data de Nascimento</label>
            <input required id="date" type="date" name="data" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <select required id="state">
              <option value="RJ">Selecione o estado</option>
              <option>Selecione o estado</option>
            </select>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <select required id="city" disabled>
              <option value="Rio de Janeiro">Selecione a cidade</option>
              <option>Selecione a cidade</option>
            </select>
          </div>
          <button className="button-cadastro">Adicionar</button>
        </form>
        <Table line={this.state.pessoa} />
      </div>
    );
  }
}

export default Formulario;
