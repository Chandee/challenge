import React from "react";
import { Texto, ImagemIcone, Wrapper } from "./style";
function IconeComTexto({ imagem, texto, preto, alt, tamanho = 1 }) {
  return (
    <Wrapper>
      <ImagemIcone src={imagem} alt={alt} tamanho={tamanho} />
      <Texto preto={preto} tamanho={tamanho}>
        {texto}
      </Texto>
    </Wrapper>
  );
}

export default IconeComTexto;
