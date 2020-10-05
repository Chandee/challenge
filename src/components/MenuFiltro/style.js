import styled from "styled-components";

export const TextoQuantidade = styled.p`
  align-self: center;
  color: #b9b9b9;
  font-size: 22px;
`;

export const WrapperMenuFiltro = styled.div`
  max-width: 1240px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 1023px){
    max-width: 850px;
  }

  @media screen and (max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
`