import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './pages/Main/Main'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import FinalPage from './pages/Final/Final'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
      <Route path="/final" component={FinalPage} />
    </Switch>
  );
}
