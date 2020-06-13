import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './pages/Main/Main'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
