import React from "react";
import "./Table.css";

const Table = (props) => {

  //console.log(props.line);


  function excluir(id) {
    const people = props.line.findIndex((elm) => {
      return elm.id === id;
    })
    delete props.line[people];
    props.alterarEstado(props.line);
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
                <td>editar</td>
                <td onClick={_ => excluir(itens.id)}>excluir</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
