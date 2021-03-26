import React, { Component } from "react";
import Table from "./Table";
import "./Formulario.css";

class Formulario extends Component {
  constructor() {
    super();
    this.enviarForm = this.enviarForm.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.editTable = this.editTable.bind(this);
    this.state = {
      edit: false,
      index: null,
      pessoa: [],
    };
  }

  //funçao para criar um novo objeto chamado pessoa
  setPessoa(lista) {
    if(this.state.edit) {
      this.setState(lista);
    }else {
      const novoObjetoPessoa = [...this.state.pessoa, lista];
      const novoArray = {
        pessoa: novoObjetoPessoa,
      };
      this.setState(novoArray);
    }
    
  }

  searchIndex(index) {
    this.setState({index});
  }

  editTable(valor) {
    this.setState({ edit: valor });
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
    if (
      dateCurrent.getMonth() + 1 < month ||
      (dateCurrent.getMonth() + 1 === month && dateCurrent.getDate() < day)
    ) {
      return idade - 1;
    }
    return idade;
  }

  enviarForm(event) {
    event.preventDefault();
    const form = document.forms.registration;
    const { name, date, state, city } = form;
    if(this.state.edit) {
      const i = this.state.index;
      const obj = [...this.state.pessoa];
      obj[i].nome = name.value;
      obj[i].data = this.formataData(date.value);
      obj[i].idade = this.calculaIdade(date.value);
      obj[i].estado = state.value;
      obj[i].cidade = city.value;
      this.setPessoa(obj);
      this.setState({edit: false, index: null});
    }else {
      const obj = {
        id: this.state.pessoa.length + 1,
        nome: name.value,
        data: this.formataData(date.value),
        idade: this.calculaIdade(date.value),
        estado: state.value,
        cidade: city.value,
      };
      //função para alterar o estado do componente
      this.setPessoa(obj);
    }
    form.reset();
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
            <input
              required
              id="name"
              type="text"
              name="nome"
              placeholder="Informe seu nome"
            />
          </div>
          <div>
            <label htmlFor="date">Data de Nascimento</label>
            <input required id="date" type="date" name="data" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <select required id="state">
              <option>Selecione o estado</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="SP">São Paulo</option>
            </select>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <select required id="city">
              <option>Selecione a cidade</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="São Paulo">São Paulo</option>
            </select>
          </div>
          <button className="button-cadastro">
            {this.state.edit ? "Editar" : "Adicionar"}
          </button>
        </form>
        <Table
          line={this.state.pessoa}
          excluirLinha={this.updateTable}
          editarLinha={this.editTable}
          searchIndex={this.searchIndex}
        />
      </div>
    );
  }
}

export default Formulario;
