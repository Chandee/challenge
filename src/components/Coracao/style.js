import styled from "styled-components";

export const CoracaoStyle = styled.img`
  height: ${({ tamanho }) => tamanho * 20}px;
  width: ${({ tamanho }) => tamanho * 20}px;

  &:hover {
    ${({ meuAtivo }) =>
      meuAtivo ? 'content: url("./imagens/Coracao/CoracaoHover.png");' : null}
  }
`;
