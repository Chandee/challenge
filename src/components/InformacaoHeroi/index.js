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

function InformacaoHeroi({
  descricao,
  nome,
  qntdQuadrinho,
  qntdFilmes,
  ultimoQuadrinho,
  imagem,
  dados,
}) {
  return (
    <WrapperHeroi>
      <TextoFundo>{nome && nome.toUpperCase()}</TextoFundo>
      <WrapperDescricao>
        {dados && <NomeComFavorito dados={dados} nome={nome} tamanho={2.2} />}
        <ParagrafoDescricao>{descricao}</ParagrafoDescricao>
        <WrapperInfos>
          <div>
            <TituloInfo>Quadrinhos</TituloInfo>
            <IconeComTexto
              imagem={"./imagens/Quadrinho/Quadrinho.png"}
              texto={qntdQuadrinho}
              alt="quadrinho"
              tamanho={2}
              preto
            />
          </div>
          <div>
            <TituloInfo>Filmes</TituloInfo>
            <IconeComTexto
              imagem={"./imagens/Filme/Filme.png"}
              texto={qntdFilmes}
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
            {ultimoQuadrinho &&
              format(new Date(ultimoQuadrinho), "dd MMM. yyyy", {
                locale: ptBR,
              })}
          </TextoHorario>
        </WrapperHorario>
      </WrapperDescricao>
      <WrapperImagem>
        <ContainerImagem src={imagem} />
      </WrapperImagem>
    </WrapperHeroi>
  );
}

export default InformacaoHeroi;
