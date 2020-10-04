import React from "react";
import { queryByText, render } from "@testing-library/react";
import InformacaoHeroi from "../";

test("Verifica verifica as infomações do heroi", () => {
  const { getByText, getByAltText, queryAllByText, container } = render(
    <InformacaoHeroi nome={"hulk"} descricao={"Esse é o personagem"} />
  );
  console.log("container", container.innerHTML);
  expect(queryAllByText(/hulk/i)[0]).toBeInTheDocument();
  expect(getByText(/Esse é o personagem/i)).toBeInTheDocument();
  expect(getByText(/3000/i)).toBeInTheDocument();
  expect(getByAltText("quadrinho")).toBeInTheDocument();
  expect(getByText(/40/i)).toBeInTheDocument();
  expect(getByAltText("filme")).toBeInTheDocument();
});
