import React from "react";
import { Texto, ImagemIcone, Wrapper } from "./style";
function IconeComTexto({ imagem, texto, vermelho, alt }) {
  return (
    <Wrapper>
      <ImagemIcone src={imagem} alt={alt} />
      <Texto>{texto}</Texto>
    </Wrapper>
  );
}

export default IconeComTexto;
