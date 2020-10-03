import styled from "styled-components";

export const InputBusca = styled.input`
  border: none;
  color: #ff1210;
  background-color: #fdecec;
  margin-left: 20px;
  font-size: 20px;
  height: 1.1em;
  width: 80%;
  ::placeholder {
    color: #ff1210;
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
`;

export const ImagemLupa = styled.img`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
`;

export const WrapperBusca = styled.div`
  background-color: #fdecec;
  width: 45%;
  align-self: center;
  text-align: left;
  border-radius: 40px;
  padding: 20px 20px 20px 50px;
  position: relative;
  margin: 50px;
`;
