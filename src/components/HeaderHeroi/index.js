import React from "react";
import Busca from "../Busca";
import { WrapperBusca, WrapperLogo, WrapperHeader } from "./style";

function HeaderHeroi() {
  return (
    <WrapperHeader>
      <WrapperLogo src="./imagens/Logo/Group4@3x.png" alt="marvel" />
      <WrapperBusca>
        <Busca segundoEstilo />
      </WrapperBusca>
    </WrapperHeader>
  );
}

export default HeaderHeroi;
