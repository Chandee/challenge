import React from "react";
import {
  ImagemPersonagem,
  LinhaVermelha,
  NomePersonagem,
  WrapperBottom,
  WrapperCardPersonagem,
  WrapperCoracao,
} from "./style";
import Coracao from "../Coracao";
import NomeComFavorito from "../NomeComFavorito";

function CardPersonagem({ onClick, nome, imagem }) {
  return (
    <WrapperCardPersonagem>
      <ImagemPersonagem
        src={imagem}
        alt={`personagem ${nome}`}
        onClick={onClick}
      />
      <LinhaVermelha />
      <WrapperBottom>
        <NomeComFavorito nome={nome}/>
      </WrapperBottom>
    </WrapperCardPersonagem>
  );
}

export default CardPersonagem;
