import React from "react";

const MontaEstados = (props) => {
  //console.log(props);
  function getCitiesId() {
    const select = document.getElementById("state");
    const optionSelected = select.options[select.selectedIndex];
    const id = parseInt(optionSelected.dataset.id);
    fetch(`http://www.geonames.org/childrenJSON?geonameId=${id}`).then(
        (resp) => {
          if (resp.status === 200) {
            resp.json().then((json) => {
                props.setCidade(json.geonames);
                //console.log(props.listaEstados);
            });
          }
        }
      );
    
  }
  return (
    <select required id="state" onChange={(_) => getCitiesId()}>
      <option value="null">Selecione o estado</option>
      {props.estados.map((estados, index) => {
        return (
          <option
            key={index}
            value={estados.adminCodes1.ISO3166_2}
            data-id={estados.geonameId}
          >
            {estados.name}
          </option>
        );
      })}
    </select>
  );
};

export default MontaEstados;
