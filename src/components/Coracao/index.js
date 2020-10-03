import React, { useState } from "react";
import { CoracaoStyle } from "./style";
function Coracao({ salvo = false, tamanho = 1 }) {
  const [ativo, setAtivo] = useState(salvo);

  const caminhoImagem = ativo
    ? "./imagens/Coracao/CoracaoAtivo.png"
    : "./imagens/Coracao/CoracaoVazio@2x.png";

  return (
    <CoracaoStyle
      onCli ck={() => setAtivo(!ativo)}
      src={caminhoImagem}
      alt="coração"
      tamanho={tamanho}
    />
  );
}

export default Coracao;
