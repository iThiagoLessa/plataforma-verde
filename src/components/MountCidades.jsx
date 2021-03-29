import React from "react";

const MountCidades = (props) => {
  const teste = props.cidades.filter(cidades => {
    return cidades.name === "São Paulo";
  });
  console.log(teste);
  return (
    <select required id="city">
      <option value="">Selecione o estado</option>
      {props.cidades.map((cidades, index) => {
        return (
          <option
            key={index}
            value={cidades.nome}
          >
            {cidades.nome}
          </option>
        );
      })}
    </select>
  );
};

export default MountCidades;