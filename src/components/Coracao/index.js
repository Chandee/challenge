import React, { useEffect, useState } from "react";
import { CoracaoStyle } from "./style";
function Coracao({ salvo = false, tamanho = 1, executaFuncao, nome }) {
  const [ativo, setAtivo] = useState(salvo);

  const caminhoImagem = ativo
    ? "./imagens/Coracao/CoracaoAtivo.png"
    : "./imagens/Coracao/CoracaoVazio@2x.png";

  const verificaLimite = () => {
    let dadosLocalStorage = JSON.parse(localStorage.getItem("heroiFavorito"));
    if (dadosLocalStorage.length < 5) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(()=>{
    setAtivo(salvo())
  },[nome])

  return (
    <CoracaoStyle
      onClick={() => {
        if (verificaLimite()) {
          executaFuncao();
          setAtivo(!ativo);
        } else {
          executaFuncao(false)
          setAtivo(false);
        }
      }}
      src={caminhoImagem}
      alt="coração"
      tamanho={tamanho}
      meuAtivo={ativo}
    />
  );
}

export default Coracao;
