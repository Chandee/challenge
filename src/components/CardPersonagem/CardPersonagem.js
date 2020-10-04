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
import { Link } from "react-router-dom";


function CardPersonagem({ onClick, nome, imagem, dados }) {
  return (
    <WrapperCardPersonagem>
      <Link to={"/heroi?id=" + dados.id}>
        <ImagemPersonagem
          src={imagem}
          alt={`personagem ${nome}`}
          onClick={onClick}
        />
      </Link>

      <LinhaVermelha />
      <WrapperBottom>
        <NomeComFavorito dados={dados} nome={nome} />
      </WrapperBottom>
    </WrapperCardPersonagem>
  );
}

export default CardPersonagem;
