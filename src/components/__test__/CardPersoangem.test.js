import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CardPersonagem from "../CardPersonagem";

test("Verifica se renderiza o componente", () => {
  const { container } = render(<CardPersonagem />);
  expect(container.innerHTML).toBeTruthy();
});
test("Verifica existencia de imagem e alt text", () => {
  const { getByAltText } = render(<CardPersonagem />);
  expect(getByAltText(/personagem/i)).toBeInTheDocument();
});
test("Verifica existencia de imagem", () => {
  const { getByRole } = render(<CardPersonagem />);
  expect(getByRole("img")).toHaveAttribute("src", /.jpg/i);
});
test("Verifica se executa ação no click", () => {
  const funcaoTeste = jest.fn();
  const { getByAltText } = render(<CardPersonagem onClick={funcaoTeste} />);
  fireEvent.click(getByAltText(/personagem/i));
  expect(funcaoTeste).toBeCalled();
});
test("Verifica existencia do nome do personagem", () => {
  const { getByText } = render(<CardPersonagem nome={"hulk"} />);

  expect(getByText(/hulk/i)).toBeInTheDocument();
});
