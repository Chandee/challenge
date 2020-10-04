import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import Switch from "..";

test("Verifica se o switch está para direita", () => {
  const { getByAltText } = render(<Switch />);
  expect(getByAltText("botao de switch").src).toMatch(/SwitchEsquerda/i);
});

test("Verifica se o switch está para esquerda", () => {
  const { getByAltText } = render(<Switch salvo={true} />);
  expect(getByAltText("botao de switch").src).toMatch(/SwitchDireita/i);
});

test("Verifica troca de estado do switch", async () => {
  const { getByAltText } = render(<Switch />);
  expect(getByAltText("botao de switch").src).toMatch(/SwitchEsquerda/i);
  fireEvent.click(getByAltText("botao de switch"));
  await wait(() => {
    expect(getByAltText("botao de switch").src).toMatch(/SwitchDireita/i);
  });
});
