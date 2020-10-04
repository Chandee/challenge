import React from "react";
import { render } from "@testing-library/react";
import InformacaoHeroi from "../";

test("Verifica verifica as infomações do heroi", () => {
  const { getByText, getByAltText } = render(<InformacaoHeroi />);
  expect(getByText(/hulk/i)).toBeInTheDocument();
  expect(getByText(/Esse é o personagem/i)).toBeInTheDocument();
  expect(getByText(/3000/i)).toBeInTheDocument();
  expect(getByAltText("quadrinho")).toBeInTheDocument();
  expect(getByText(/20/i)).toBeInTheDocument();
  expect(getByAltText("filme")).toBeInTheDocument();
});
