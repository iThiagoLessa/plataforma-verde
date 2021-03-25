import React from "react";
import "./Table.css";

const Table = (props) => {
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
          <tr>
            <td>José da Silva</td>
            <td>11/09/1995</td>
            <td>25</td>
            <td>RJ</td>
            <td>Rio de Janeiro</td>
            <td>editar</td>
            <td>excluir</td>
          </tr>
          {props.line.map((itens, index) => {
            return (
              <tr key={index}>
                <td>{itens.nome}</td>
                <td>{itens.data}</td>
                <td>{itens.idade}</td>
                <td>{itens.estado}</td>
                <td>{itens.cidade}</td>
                <td>editar</td>
                <td>excluir</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
