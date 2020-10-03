import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Heroi from "./pages/Heroi";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{minHeight: '100%', paddingBottom: '100px'}}>
      <Switch>
        <Route path="/heroi">
          <Heroi />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
