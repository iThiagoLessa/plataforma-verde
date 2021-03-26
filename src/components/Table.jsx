import React from "react";
import "./Table.css";

const Table = (props) => {
  function excluir(id) {
    const index = props.line.findIndex((elm) => {
      return elm.id === id;
    });
    //removendo do json
    props.line.splice(props.line.indexOf(index), 1);
    props.excluirLinha(props.line);
  }
  function formatarDataParaEditar(data) {
    const [day, month, year] = data.match(/\d+/g);
    return `${year}-${month}-${day}`;
  }
  function editar(id) {
    //alterando o estado para o pai poder saber que é uma edição
    props.editarLinha(true);
    const form = document.forms.registration;
    const [nome, date, state, city] = form;
    const index = props.line.findIndex((elm) => {
      return elm.id === id;
    });
    //atualizando o valor dos campos
    nome.value = props.line[index].nome;
    date.value = formatarDataParaEditar(props.line[index].data);
    state.value = props.line[index].estado;
    city.value = props.line[index].cidade;
    props.searchIndex(index);
  }

  return (
    <div>
      <table className="tabela">
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Data</th>
            <th>Idade</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {props.line.map((itens) => {
            return (
              <tr key={itens.id}>
                <td>{itens.nome}</td>
                <td>{itens.data}</td>
                <td>{itens.idade}</td>
                <td>{itens.estado}</td>
                <td>{itens.cidade}</td>
                <td onClick={(_) => editar(itens.id)}>editar</td>
                <td onClick={(_) => excluir(itens.id)}>excluir</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
