import styled from "styled-components";

export const TituloInfo = styled.h4`
  font-weight: bold;
  margin-bottom: 30px;
  display: block;
`;

export const TituloRating = styled.h4`
  font-weight: bold;
  display: inline-block;
`;

export const ImagemRating = styled.img`
  height: 15px;
  margin-left: 15px;
`;

export const TextoHorario = styled.p`
  margin-left: 15px;
`;

export const WrapperInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const WrapperRating = styled.div`
  margin: 40px 0px;
`;

export const WrapperHorario = styled.div`
  display: flex;
`;

export const ParagrafoDescricao = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #8c8c8c;
  margin: 30px 0px;
  letter-spacing: 0.05em;
`;

export const ContainerImagem = styled.img`
  max-height: 600px;
  max-width: 600px;
  width: auto;
  height: auto;

  @media screen and (max-width: 1023px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

export const WrapperImagem = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  place-content: center;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    margin: 40px auto;
  }
`;

export const WrapperDescricao = styled.div`
  position: relative;
  width: 20%;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const WrapperHeroi = styled.section`
  padding: 50px;
  display: flex;

  @media screen and (max-width: 1023px) {
    padding: 20px;
    flex-direction: column;
  }
  @media screen and (max-width: 767px){
      padding: auto;
  }
`;

export const TextoFundo = styled.div`
  color: #ffffff;
  position: absolute;
  z-index: 0;
  font-size: 450px;
  font-weight: bold;
  transform: translate(10%, -20%);
  overflow: hidden;
  width: 80%;
  height: 450px;

  @media screen and (max-width: 1023px) {
    height: 380px;
    font-size: 380px;
    width: 50%;
  }

  @media screen and (max-width: 767px){
      height: 200px;
      font-size: 170px;
  }
`;
