import React, { useState } from "react";
import { SwitchStyle } from "./style";
function Switch({ salvo = false, tamanho = 1 }) {
  const [ativo, setAtivo] = useState(salvo);

  const caminhoImagem = ativo
    ? "./imagens/Coracao/SwitchDireita.png"
    : "./imagens/Coracao/SwitchEsquerda.png";

  return (
    <SwitchStyle
      onClick={() => setAtivo(!ativo)}
      src={caminhoImagem}
      alt="botao de switch"
      tamanho={tamanho}
      meuAtivo={ativo}
    />
  );
}

export default Switch;
