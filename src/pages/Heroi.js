import React, { useEffect, useState } from "react";
import HeaderHeroi from "../components/HeaderHeroi";
import InfoQuadrinhos from "../components/InfoQuadrinhos";
import InformacaoHeroi from "../components/InformacaoHeroi";
import { useLocation } from "react-router-dom";
import { heroiEspecifico, resgataQuadrinho } from "../service/Endpoint";
import styled from "styled-components";

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
        setDadoPersonagem(res.data.data.results[0]);
      })
      .catch((err) => {});
    resgataQuadrinho(idHero)
      .then((res) => {
        setQuadrinhos(res.data.data.results);
      })
      .catch((err) => {});
  }, [idHero]);

  const ContainerGeral = styled.div`
    padding: 40px 80px 0px 80px;

    @media screen and (max-width: 1023px) {
      padding: 20px 40px 0px 40px;
    }

    @media screen and (max-width: 767px) {
      padding: 5px 5px 0px 5px;
    }
  `;

  return (
    <>
      <ContainerGeral>
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
      </ContainerGeral>

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
