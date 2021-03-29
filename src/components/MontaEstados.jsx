import React from "react";

const MontaEstados = (props) => {
  //console.log(props);
  function getCitiesId() {
    const select = document.getElementById("state");
    const optionSelected = select.options[select.selectedIndex];
    const id = parseInt(optionSelected.dataset.id);
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`).then(
        (resp) => {
          if (resp.status === 200) {
            resp.json().then((json) => {
                props.setCidade(json);
                //console.log(json);
            });
          }
        }
      );
    
  }
  return (
    <select required id="state" onChange={(_) => getCitiesId()}>
      <option value="">Selecione o estado</option>
      {props.estados.map((estados, index) => {
        return (
          <option
            key={index}
            value={estados.sigla}
            data-id={estados.id}
          >
            {estados.nome}
          </option>
        );
      })}
    </select>
  );
};

export default MontaEstados;
