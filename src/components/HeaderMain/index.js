import React from "react";
import Busca from "../Busca";
import {
  WrapperBusca,
  ContainerImagem,
  WrapperHeader,
  ContainerParagrafo,
} from "./style";

function HeaderMain({ setTodosHerois }) {
  return (
    <WrapperHeader>
      <ContainerImagem
        src="./imagens/Logo/Group@3x.png"
        style={{ width: "300px", marginTop: "30px" }}
        alt="marvel"
      />
      <h1>EXPLORE O UNIVERSO</h1>
      <ContainerParagrafo>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve
      </ContainerParagrafo>
      <WrapperBusca>
        <Busca setTodosHerois={setTodosHerois} />
      </WrapperBusca>
    </WrapperHeader>
  );
}

export default HeaderMain;
