import React, { useEffect, useState } from "react";
import CardPersonagem from "../components/CardPersonagem/CardPersonagem";
import CorpoMain from "../components/CorpoMain";
import HeaderMain from "../components/HeaderMain";
import ListaPersonagem from "../components/ListaPersonagem";
import MenuFiltro from "../components/MenuFiltro";
import SwitchOpacao from "../components/SwitchOpcao";
import { heroiOrdemAlfabetica } from "../service/Endpoint";

function Home() {
  const [todosHerois, setTodosHerois] = useState([]);

  useEffect(() => {
    heroiOrdemAlfabetica()
      .then((res) => {
        console.log("resposta", res.data.data);
        setTodosHerois(res.data.data.results);
      })
      .catch((err) => {
        console.log("erroo", err.response.data);
      });
  }, []);

  return (
    <>
      <HeaderMain></HeaderMain>
      <CorpoMain personagens={todosHerois} />

      <footer
        style={{
          background: "red",
          width: "100%",
          height: "80px",
          position: "absolute",
          bottom: 0,
        }}
      ></footer>
    </>
  );
}

export default Home;
