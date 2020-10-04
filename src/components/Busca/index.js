import React, { useEffect, useState } from "react";
import { buscaHeroiPorNome } from "../../service/Endpoint";
import { ImagemLupa, InputBusca, WrapperBusca } from "./style";

function Busca({ segundoEstilo = false, setTodosHerois }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (!segundoEstilo) {
      buscaHeroiPorNome(texto).then((res) => {
        setTodosHerois(res.data.data.results);
      });
    }
  }, [texto]);

  return (
    <WrapperBusca segundoEstilo={segundoEstilo}>
      <ImagemLupa src={"./imagens/Lupa/Lupa.png"} alt="lupa" />
      <InputBusca
        placeholder="Procure por heróis"
        value={texto}
        type="text"
        onChange={(e) => setTexto(e.target.value)}
        segundoEstilo={segundoEstilo}
      />
    </WrapperBusca>
  );
}

export default Busca;
