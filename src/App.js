import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Start from "./screens/Start";
import Result from "./screens/Result";
import Questions from "./screens/Questions";

import DataContext from "./utils/DataContext";

function App() {
  const [data, setData] = useState({});

  return (
    <BrowserRouter>
      <DataContext.Provider value={[data, setData]}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
