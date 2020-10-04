import React from "react";
import SwitchOpcao from "../SwitchOpcao";
import { TextoQuantidade, WrapperMenuFiltro } from "./style";

function MenuFiltro({ tamanho }) {
  return (
    <WrapperMenuFiltro>
      <TextoQuantidade>Encontrados {tamanho} heróis</TextoQuantidade>
      <SwitchOpcao />
    </WrapperMenuFiltro>
  );
}

export default MenuFiltro;
