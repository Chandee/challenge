import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import Coracao from "../";

test("Verifica se renderiza o componente com coração vazio", () => {
  const { getByRole } = render(<Coracao />);
  expect(getByRole("img").src).toMatch(/CoracaoVazio/i);
});

test("Verifica se renderiza o componente com coração cheio", () => {
  const { getByRole } = render(<Coracao salvo={true} />);
  expect(getByRole("img").src).toMatch(/CoracaoAtivo/i);
});

test("Verifica troca de estado do coração", async () => {
    const { getByRole } = render(<Coracao />);
    expect(getByRole("img").src).toMatch(/CoracaoVazio/i);
    fireEvent.click(getByRole("img"))
    await wait(()=>{
        expect(getByRole("img").src).toMatch(/CoracaoAtivo/i);
    })

});
