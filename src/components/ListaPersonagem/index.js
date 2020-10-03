import React from "react";
import CardPersonagem from "../CardPersonagem/CardPersonagem";
import { WrapperLista } from "./style";

function ListaPersonagem({ lista }) {
  return (
    <WrapperLista>
      {lista.map(() => {
        return <CardPersonagem nome={"Hulk"} />;
      })}
    </WrapperLista>
  );
}

export default ListaPersonagem;
