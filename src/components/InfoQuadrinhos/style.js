import styled from 'styled-components'

export const WrapperQuadrinho = styled.section`
  padding: 50px;

  @media screen and (max-width: 1023px){
      padding: 20px;
  }
  
  @media screen and (max-widhth: 767px){
      padding: 10px;
  }
`;

export const WrapperListaQuadrinho = styled.div`
    display: flex;
    flex-wrap: wrap;
`