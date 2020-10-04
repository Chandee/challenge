import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Heroi from "./pages/Heroi";
import Home from "./pages/Home";
import styled from "styled-components";

const WrapperApp = styled.div`
  min-height: 100%;
  padding-bottom: 100px;
  background-color: ${({ caminho }) =>
    caminho === "/heroi" ? "#E7f6E7" : "#FFFFFF"};
`;

function App() {
  const location = useLocation();
  if(!localStorage.getItem("heroiFavorito")){
    localStorage.setItem("heroiFavorito", JSON.stringify([]))
  }

  return (
    <WrapperApp caminho={location.pathname}>
      <Switch>
        <Route path="/heroi">
          <Heroi />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </WrapperApp>
  );
}

export default App;
