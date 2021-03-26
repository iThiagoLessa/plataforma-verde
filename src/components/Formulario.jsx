import React, { Component } from "react";
import Table from "./Table";
import "./Formulario.css";

class Formulario extends Component {
  constructor() {
    super();
    this.enviarForm = this.enviarForm.bind(this);
    this.criarPessoa = this.criarPessoa.bind(this);
    this.updateTable = this.updateTable.bind(this);
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
    console.log(`nova pessoa: ${novoArray}`);
    this.setState(novoArray);
  }

  updateTable(valor) {
    this.setState(valor);
  }

  formataData(data) {
    const [year, month, day] = data.match(/\d+/g);
    return `${day}/${month}/${year}`;
  }
  
  calculaIdade(data) {
    const formatData = data.match(/\d+/g);
    const [year, month, day] = formatData;
    const dateCurrent = new Date();
    let idade = dateCurrent.getFullYear() - year;
    if((dateCurrent.getMonth() + 1 < month) || (dateCurrent.getMonth() + 1 === month && dateCurrent.getDate() < day)) {
      return idade - 1;
    }
    return idade;
  }

  enviarForm(event) {
    event.preventDefault();
    const form = document.forms.registration;
    const { name, date, state, city } = form;
    const obj = {
      id: this.state.pessoa.length + 1,
      nome: name.value,
      data: this.formataData(date.value),
      idade: this.calculaIdade(date.value),
      estado: state.value,
      cidade: city.value,
    };
    //função para alterar o estado do componente
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
            <input required id="name" type="text" name="nome" placeholder="Informe seu nome" />
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
        <Table line={this.state.pessoa} alterarEstado={this.updateTable} />
      </div>
    );
  }
}

export default Formulario;
