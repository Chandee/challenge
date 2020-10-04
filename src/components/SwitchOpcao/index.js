import React, { useState } from "react";
import IconeComTexto from "../IconeComTexto";
import { SwitchStyle, WrapperSwitch } from "./style";


function SwitchOpcao({ salvo = false, tamanho = 1 }) {
  const [ativo, setAtivo] = useState(salvo);

  const caminhoImagem = ativo
    ? "./imagens/Switch/SwitchDireita.png"
    : "./imagens/Switch/SwitchEsquerda.png";

  return (
    <WrapperSwitch>
      <IconeComTexto
        imagem="./imagens/Heroi/Heroi.png"
        texto="Ordenar por nome - A/Z"
        alt="icone herói"
      />
      <SwitchStyle
        onClick={() => setAtivo(!ativo)}
        src={caminhoImagem}
        alt="botao de switch"
        tamanho={tamanho}
        meuAtivo={ativo}
      />
      <IconeComTexto
        imagem="./imagens/Coracao/CoracaoAtivo.png"
        texto="Somente favoritos"
        alt="icone coração"
      />
    </WrapperSwitch>
  );
}

export default SwitchOpcao;
