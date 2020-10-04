import React, { useEffect, useState } from "react";
import HeaderHeroi from "../components/HeaderHeroi";
import InfoQuadrinhos from "../components/InfoQuadrinhos";
import InformacaoHeroi from "../components/InformacaoHeroi";
import { useLocation } from "react-router-dom";
import { heroiEspecifico, resgataQuadrinho } from "../service/Endpoint";

function Home() {
  const [dadoPersonagem, setDadoPersonagem] = useState("");
  const [quadrinhos, setQuadrinhos] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const idHero = query.get("id");
  useEffect(() => {
    heroiEspecifico(idHero)
      .then((res) => {
        console.log("resuiltado erspecifo", res);
        setDadoPersonagem(res.data.data.results[0]);
      })
      .catch((err) => {
        console.log("erro");
      });
    resgataQuadrinho(idHero)
      .then((res) => {
        console.log("quadrinhoo", res.data.data);
        setQuadrinhos(res.data.data.results);
      })
      .catch((err) => console.log("deu ruim"));
  }, [idHero]);

  return (
    <>
      <div
        style={{
          padding: "40px 80px 0px 80px",
        }}
      >
        <HeaderHeroi></HeaderHeroi>
        <InformacaoHeroi
          dados={{
            id: dadoPersonagem.id,
            name: dadoPersonagem && dadoPersonagem.name,
            thumbnail: {
              path: dadoPersonagem && dadoPersonagem.thumbnail.path,
              extension: dadoPersonagem && dadoPersonagem.thumbnail.extension,
            },
          }}
          descricao={dadoPersonagem.description}
          nome={dadoPersonagem.name && dadoPersonagem.name.toUpperCase()}
          qntdQuadrinho={
            dadoPersonagem.comics && dadoPersonagem.comics.available
          }
          qntdFilmes={dadoPersonagem.series && dadoPersonagem.series.available}
          imagem={
            dadoPersonagem.thumbnail &&
            dadoPersonagem.thumbnail.path +
              "." +
              dadoPersonagem.thumbnail.extension
          }
          ultimoQuadrinho={quadrinhos[0] && quadrinhos[0].dates[0].date}
        />
        <InfoQuadrinhos id={query.get("id")} quadrinhos={quadrinhos} />
      </div>

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
