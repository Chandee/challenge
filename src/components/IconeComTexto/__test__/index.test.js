import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import IconeComTexto from "..";

test("Verifica se o renderizou com as opções passadas", () => {
  const { getByAltText, getByText } = render(
    <IconeComTexto imagem="imagem.png" texto="Sou o texto" alt="teste" />
  );
  expect(getByAltText("teste").src).toMatch(/imagem.png/i);
  expect(getByText(/Sou o texto/i)).toBeInTheDocument();
});
