import styled from "styled-components";

export const Texto = styled.p`
  align-self: center;
  font-size: 16px;
  color: ${({ preto }) => (preto ? "#404040" : "#ff1510")};
  margin-left: ${({ tamanho }) => tamanho * 30}px;
`;

export const ImagemIcone = styled.img`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: ${({ tamanho }) => tamanho * 20}px;
  max-height: ${({ tamanho }) => tamanho * 30}px;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
