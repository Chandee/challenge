import styled from "styled-components";

export const SwitchStyle = styled.img`
  height: 40px;
  width: 75px;
  margin: 0 20px;
  ${({meuAtivo}) => meuAtivo ? 'transform: translateY(2px);' : null}
`;

export const WrapperSwitch = styled.div`
  display: flex;
`
