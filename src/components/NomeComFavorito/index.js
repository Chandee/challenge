import React from "react";
import { NomePersonagem, WrapperCoracao } from "../CardPersonagem/style";
import Coracao from "../Coracao";

function NomeComFavorito({ nome, tamanho = 1, dados }) {
  const enviaParaLocalStorage = (naoLimite = true) => {
    let dadosLocalStorage = JSON.parse(localStorage.getItem("heroiFavorito"));
    let dadoFiltrado = dadosLocalStorage.filter((x) => x.name === dados.name);
    if (dadoFiltrado.length === 0 && naoLimite) {
      //siginifca que vai inserir um novo
      let objetoEnvioStorage = [...dadosLocalStorage, dados];
      localStorage.setItem("heroiFavorito", JSON.stringify(objetoEnvioStorage));
    } else {
      let posicao = dadosLocalStorage.map((x) => x.name).indexOf(dados.name);
      if (posicao > -1) {
        //encontrou e removeu
        dadosLocalStorage.splice(posicao, 1);
        localStorage.setItem(
          "heroiFavorito",
          JSON.stringify(dadosLocalStorage)
        );
      }
    }
  };

  const verificaFavorito = () => {
		let dadosLocalStorage = JSON.parse(localStorage.getItem("heroiFavorito"));
		console.log("entender o que ta acontenceondo", dados.name)
    let dadoFiltrado = dadosLocalStorage.filter((x) => x.name === dados.name);
    if (dadoFiltrado.length > 0) {
			console.log("deu true")
      return true;
    } else {
			console.log("deu falso")
      return false;
    }
  };

  return (
    <>
      <NomePersonagem tamanho={tamanho}> {nome}</NomePersonagem>
      <WrapperCoracao>
        <Coracao
          tamanho={tamanho}
          executaFuncao={enviaParaLocalStorage}
					salvo={() => verificaFavorito()}
					nome={nome}
        />
      </WrapperCoracao>
    </>
  );
}

export default NomeComFavorito;
