import React from 'react';
import {HashRouter , Switch , Route} from "react-router-dom/modules/HashRouter";
import Home from "./components/home/header";


function App() {
  return (
    <>
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
            </Switch>
        </HashRouter>
        </>
  );
}

export default App;
