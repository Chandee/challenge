import React from "react";
import { fireEvent, getByText, render, wait } from "@testing-library/react";
import ComicHeroi from "../";

test("Verifica se existe o comic e o titulo dele", () => {
  const { getByText, getByRole } = render(
    <ComicHeroi imagem={"imagem.png"} titulo={"comic"} />
  );
  expect(getByText(/comic/i)).toBeInTheDocument();
  expect(getByRole("img").src).toMatch(/imagem.png/i);
});
