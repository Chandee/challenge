import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import Switch from "..";
import SwitchOpcao from "..";

test("Verifica se o switch está para direita", () => {
  const setSwitchHeroi = jest.fn();

  const { getByAltText } = render(
    <SwitchOpcao setSwitchHeroi={setSwitchHeroi} />
  );
  expect(getByAltText("botao de switch").src).toMatch(/SwitchEsquerda/i);
});


test("Verifica troca de estado do switch", async () => {
  const setSwitchHeroi = jest.fn();
  const { getByAltText } = render(
    <SwitchOpcao setSwitchHeroi={setSwitchHeroi} />
  );
  expect(getByAltText("botao de switch").src).toMatch(/SwitchEsquerda/i);
  fireEvent.click(getByAltText("botao de switch"));
  await wait(() => {
    expect(getByAltText("botao de switch").src).toMatch(/SwitchDireita/i);
  });
});
