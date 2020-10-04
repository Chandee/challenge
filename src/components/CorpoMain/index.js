import React from "react";
import ListaPersonagem from "../ListaPersonagem";
import MenuFiltro from "../MenuFiltro";
import { WrapperMain } from "./style";

function CorpoMain({ personagens }) {
  return (
    <WrapperMain>
      <MenuFiltro tamanho={personagens.length} />
      <ListaPersonagem lista={personagens} />
    </WrapperMain>
  );
}

export default CorpoMain;
