import React, { useEffect, useState } from "react";
import { ImagemLupa, InputBusca, WrapperBusca } from "./style";

function Busca() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    console.log("meu texto", texto);
  }, [texto]);

  return (
    <WrapperBusca>
      <ImagemLupa src={"./imagens/Lupa/Lupa.png"} alt="lupa" />
      <InputBusca
        placeholderTextColor="#FF1210"
        placeholder="Procure por heróis"
        value={texto}
        type="text"
        onChange={(e) => setTexto(e.target.value)}
      />
    </WrapperBusca>
  );
}

export default Busca;
