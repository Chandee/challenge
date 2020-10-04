import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import NomeComFavorito from "..";

test("Verifica se possui imagem e nome", async() => {
  const { getByRole, getByText } = render(
    <div>
      <NomeComFavorito nome={'hulk'}/>
    </div>
  );
  expect(getByRole("img").src).toMatch(/CoracaoVazio/i);
  fireEvent.click(getByRole("img"))
  await wait(()=>{
      expect(getByRole("img").src).toMatch(/CoracaoAtivo/i);
  })
  expect(getByText(/hulk/i)).toBeInTheDocument();
});
