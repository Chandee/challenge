import React from "react";
import CardPersonagem from "../CardPersonagem/CardPersonagem";
import { WrapperLista } from "./style";
import { Link } from "react-router-dom";

function ListaPersonagem({ lista }) {
  return (
    <WrapperLista>
      {lista.map((item) => {
        return (
          <Link to={'/heroi?id=' + item.id }>
            <CardPersonagem
              nome={item.name}
              imagem={item.thumbnail.path + "." + item.thumbnail.extension}
            />
          </Link>
        );
      })}
    </WrapperLista>
  );
}

export default ListaPersonagem;
