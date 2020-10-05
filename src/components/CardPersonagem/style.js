import styled from "styled-components";

export const ImagemPersonagem = styled.img`
  height: 280px;
  width: 280px;
  position: relative;
`;

export const NomePersonagem = styled.span`
  font-weight: bold;
  display: inline-block;
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ tamanho }) => tamanho * 20}px;

  @media screen and (max-width: 1023px){
    max-width: 400px;
  }

  @media screen and (max-width: 768px){
    max-width: 200px;
  }
`;

export const WrapperBottom = styled.div`
  height: 30px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const LinhaVermelha = styled.div`
  background: #ff1510;
  height: 3px;
  width: 100%;
  width: 280px;
  transform: translateY(-5px);
`;

export const WrapperCardPersonagem = styled.div`
  width: 280px;
  margin: 0 20px;
`;

export const WrapperCoracao = styled.div`
  position: absolute;
  right: 0;
  display: inline-block;
`;
