import React from 'react';
import {HashRouter , Switch , Route} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import LogOut from "./components/log-out/LogOut";


function App() {
  return (
    <>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path ="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/log-out" component={LogOut}/>
            </Switch>
        </HashRouter>
        </>
  );
}

export default App;
