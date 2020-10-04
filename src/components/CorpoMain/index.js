import React, { useEffect, useState } from "react";
import ListaPersonagem from "../ListaPersonagem";
import MenuFiltro from "../MenuFiltro";
import { WrapperMain } from "./style";

function CorpoMain({ personagens }) {
  const [switchHeroi, setSwitchHeroi] = useState(false);
  const [personagemFavorito, setPersonagemFavorito] = useState([]);

  useEffect(() => {
    let heroisStorage = JSON.parse(localStorage.getItem("heroiFavorito"));
    setPersonagemFavorito(heroisStorage);
  }, [switchHeroi]);

  return (
    <WrapperMain>
      <MenuFiltro
        tamanho={personagens.length}
        setSwitchHeroi={() => setSwitchHeroi(!switchHeroi)}
      />
      <ListaPersonagem lista={personagens} personagemFavorito={personagemFavorito} switchHeroi={switchHeroi}/>
    </WrapperMain>
  );
}

export default CorpoMain;
