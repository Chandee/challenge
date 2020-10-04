import React from "react";
import { queryByText, render } from "@testing-library/react";
import InformacaoHeroi from "../";

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
  window.localStorage.setItem("heroiFavorito", JSON.stringify(dados))
});

test("Verifica verifica as infomações do heroi", () => {
  const { getByText, getByAltText, queryAllByText, container } = render(
    <InformacaoHeroi
      nome={"hulk"}
      descricao={"Esse é o personagem"}
      dados={{
        id: 123,
        name: "hulk",
        thumbnail: {
          path: "imagem",
          extension: "jpg",
        },
      }}
      nome={"hulk".toUpperCase()}
      qntdQuadrinho={"3000"}
      qntdFilmes={"40"}
      imagem={"foto.png"}
      ultimoQuadrinho={"1969-12-31T19:00:00-0500"}
    />
  );
  console.log("container", container.innerHTML);
  expect(queryAllByText(/hulk/i)[0]).toBeInTheDocument();
  expect(getByText(/Esse é o personagem/i)).toBeInTheDocument();
  expect(getByText(/3000/i)).toBeInTheDocument();
  expect(getByAltText("quadrinho")).toBeInTheDocument();
  expect(getByText(/40/i)).toBeInTheDocument();
  expect(getByAltText("filme")).toBeInTheDocument();
});
