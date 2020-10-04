import React, { useEffect, useState } from "react";
import { ImagemLupa, InputBusca, WrapperBusca } from "./style";

function Busca({ segundoEstilo = false }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    console.log("meu texto", texto);
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
