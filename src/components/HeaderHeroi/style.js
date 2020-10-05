import styled from "styled-components";

export const WrapperBusca = styled.div`
  display: flex;
  flex: 0 0 82%;
  @media screen and (max-width: 1023px){
      width: 100%;
      place-content: center;
  }
`;

export const WrapperLogo = styled.img`
  width: 250px;
  height: 80px;
`;

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1023px){
    flex-direction: column;
    place-items: center;
  }
`;
