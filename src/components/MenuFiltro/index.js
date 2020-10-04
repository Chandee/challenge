import React from "react";
import SwitchOpcao from "../SwitchOpcao";
import { TextoQuantidade, WrapperMenuFiltro } from "./style";

function MenuFiltro({ tamanho, setSwitchHeroi }) {
  return (
    <WrapperMenuFiltro>
      <TextoQuantidade>Encontrados {tamanho} heróis</TextoQuantidade>
      <SwitchOpcao setSwitchHeroi={setSwitchHeroi} />
    </WrapperMenuFiltro>
  );
}

export default MenuFiltro;
