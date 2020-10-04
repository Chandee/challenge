import React, { useEffect, useState } from "react";
import CorpoMain from "../components/CorpoMain";
import HeaderMain from "../components/HeaderMain";

import { heroiOrdemAlfabetica } from "../service/Endpoint";

function Home() {
  const [todosHerois, setTodosHerois] = useState([]);

  useEffect(() => {
    heroiOrdemAlfabetica()
      .then((res) => {
        setTodosHerois(res.data.data.results);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <HeaderMain setTodosHerois={setTodosHerois}></HeaderMain>
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
