import styled from "styled-components";

export const SwitchStyle = styled.img`
  height: 40px;
  width: 75px;
  margin: 0 20px;
  ${({ meuAtivo }) => (meuAtivo ? "transform: translateY(2px);" : null)}

  @media screen and (max-width: 540px){
    margin: 15px;
  }
`;

export const WrapperSwitch = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;
