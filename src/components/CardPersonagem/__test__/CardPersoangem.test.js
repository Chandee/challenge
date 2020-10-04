import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import CardPersonagem from "../CardPersonagem";
import {  BrowserRouter as Router  } from "react-router-dom";

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

test("Verifica se renderiza o componente", () => {
  const { container } = render(
    <Router>
      <CardPersonagem
        imagem={"img.png"}
        dados={{
          id: 1234,
          name: "hulk",
          thumbnail: {
            path: "img",
            extension: "png",
          },
        }}
      />
    </Router>
  );
  expect(container.innerHTML).toBeTruthy();
});
test("Verifica existencia de imagem e alt text", () => {
  const { getByAltText } = render(
    <Router>
      <CardPersonagem
        imagem={"img.png"}
        dados={{
          id: 1234,
          name: "hulk",
          thumbnail: {
            path: "img",
            extension: "png",
          },
        }}
      />
    </Router>
  );
  expect(getByAltText(/personagem/i)).toBeInTheDocument();
});
test("Verifica existencia de imagem", () => {
  const { queryAllByRole } = render(
    <Router>
      <CardPersonagem
        imagem={"img.png"}
        dados={{
          id: 1234,
          name: "hulk",
          thumbnail: {
            path: "img",
            extension: "png",
          },
        }}
      />
    </Router>
  );

  expect(queryAllByRole("img")[0].src).toMatch(/.png/i);
});
test("Verifica se executa ação no click", async () => {
  const funcaoTeste = jest.fn();
  const { getByAltText } = render(
    <Router>
      <CardPersonagem
        onClick={funcaoTeste}
        imagem={"img.png"}
        dados={{
          id: 1234,
          name: "hulk",
          thumbnail: {
            path: "img",
            extension: "png",
          },
        }}
      />
    </Router>
  );
  fireEvent.click(getByAltText(/personagem/i));
  await wait(() => {
    expect(funcaoTeste).toBeCalled();
  });
});
test("Verifica existencia do nome do personagem", () => {
  const { getByText } = render(
    <Router>
      <CardPersonagem
        nome={"hulk"}
        imagem={"img.png"}
        dados={{
          id: 1234,
          name: "hulk",
          thumbnail: {
            path: "img",
            extension: "png",
          },
        }}
      />
    </Router>
  );

  expect(getByText(/hulk/i)).toBeInTheDocument();
});
