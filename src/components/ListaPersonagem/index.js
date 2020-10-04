import React from "react";
import CardPersonagem from "../CardPersonagem/CardPersonagem";
import { WrapperLista } from "./style";

function ListaPersonagem({ lista, personagemFavorito, switchHeroi }) {
  const verificaQuemRenderiza = () => {
    if (switchHeroi) {
      {
        return personagemFavorito.map((item) => {
          return (
            <CardPersonagem
              nome={item.name}
              imagem={item.thumbnail.path + "." + item.thumbnail.extension}
              dados={{
                id: item.id,
                name: item.name,
                thumbnail: {
                  path: item.thumbnail.path,
                  extension: item.thumbnail.extension,
                },
              }}
            />
          );
        });
      }
    } else {
      {
        return lista.map((item) => {
          return (
            <CardPersonagem
              nome={item.name}
              imagem={item.thumbnail.path + "." + item.thumbnail.extension}
              dados={{
                id: item.id,
                name: item.name,
                thumbnail: {
                  path: item.thumbnail.path,
                  extension: item.thumbnail.extension,
                },
              }}
            />
          );
        });
      }
    }
  };

  return <WrapperLista>{verificaQuemRenderiza()}</WrapperLista>;
}

export default ListaPersonagem;
