import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import Coracao from "../";

beforeAll(() => {
  const dados = [
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
    },
    {
      id: 1009149,
      name: "Abyss",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
        extension: "jpg",
      },
    },
    {
      id: 1009148,
      name: "Absorbing Man",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
        extension: "jpg",
      },
    },
  ];
  window.localStorage.setItem("heroiFavorito", JSON.stringify(dados));
});

test("Verifica se renderiza o componente com coração vazio", () => {
  const funcaoTeste = jest.fn();
  const enviaParaLocalStorage = jest.fn()
  const { getByRole } = render(
    <Coracao
      tamanho={1}
      executaFuncao={enviaParaLocalStorage}
      salvo={funcaoTeste}
      nome={"hulk"}
    />
  );
  expect(getByRole("img").src).toMatch(/CoracaoVazio/i);
});

test("Verifica se renderiza o componente com coração cheio", () => {
  const funcaoTeste = jest.fn(() => true);
  const enviaParaLocalStorage = jest.fn()
  const { getByRole } = render(
    <Coracao
      tamanho={1}
      executaFuncao={enviaParaLocalStorage}
      salvo={funcaoTeste}
      nome={"hulk"}
    />
  );
  expect(getByRole("img").src).toMatch(/CoracaoAtivo/i);
});

test("Verifica troca de estado do coração", async () => {
  const funcaoTeste = jest.fn();
  const enviaParaLocalStorage = jest.fn();
  const { getByRole } = render(
    <Coracao
      tamanho={1}
      executaFuncao={enviaParaLocalStorage}
      salvo={funcaoTeste}
      nome={"hulk"}
    />
  );
  expect(getByRole("img").src).toMatch(/CoracaoVazio/i);
  fireEvent.click(getByRole("img"));
  await wait(() => {
    expect(getByRole("img").src).toMatch(/CoracaoAtivo/i);
  });
});
