import React from "react";

const MountCidades = (props) => {
  return (
    <select required id="city">
      <option value="null">Selecione o estado</option>
      {props.cidades.map((cidades, index) => {
        return (
          <option
            key={index}
            value={cidades.name}
          >
            {cidades.name}
          </option>
        );
      })}
    </select>
  );
};

export default MountCidades;