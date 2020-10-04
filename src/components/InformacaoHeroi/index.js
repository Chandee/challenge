import React from "react";
import IconeComTexto from "../IconeComTexto";
import NomeComFavorito from "../NomeComFavorito";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  ContainerImagem,
  ImagemRating,
  ParagrafoDescricao,
  TextoFundo,
  TextoHorario,
  TituloInfo,
  TituloRating,
  WrapperDescricao,
  WrapperHeroi,
  WrapperHorario,
  WrapperImagem,
  WrapperInfos,
  WrapperRating,
} from "./style";

function InformacaoHeroi({ descricao, nome }) {
  return (
    <WrapperHeroi>
      <TextoFundo>{nome.toUpperCase()}</TextoFundo>
      <WrapperDescricao>
        <NomeComFavorito nome={nome} tamanho={2.2} />
        <ParagrafoDescricao>{descricao}</ParagrafoDescricao>
        <WrapperInfos>
          <div>
            <TituloInfo>Quadrinhos</TituloInfo>
            <IconeComTexto
              imagem={"./imagens/Quadrinho/Quadrinho.png"}
              texto={3000}
              alt="quadrinho"
              tamanho={2}
              preto
            />
          </div>
          <div>
            <TituloInfo>Filmes</TituloInfo>
            <IconeComTexto
              imagem={"./imagens/Filme/Filme.png"}
              texto={40}
              alt="filme"
              tamanho={2}
              preto
            />
          </div>
        </WrapperInfos>
        <WrapperRating>
          <TituloRating>Rating:</TituloRating>{" "}
          {/* nao encontrei endpoint para essa informação */}
          <ImagemRating src={"./imagens/Estrela/Estrela@3x.png"} />
        </WrapperRating>
        <WrapperHorario>
          <h4>Último quadrinho:</h4>

          <TextoHorario>
            {format(new Date("2020-07-21T10:35:15-0400"), "dd MMM. yyyy", {
              locale: ptBR,
            })}
          </TextoHorario>
        </WrapperHorario>
      </WrapperDescricao>
      <WrapperImagem>
        <ContainerImagem
          src={"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"}
        />
      </WrapperImagem>
    </WrapperHeroi>
  );
}

export default InformacaoHeroi;
