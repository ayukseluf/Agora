import React from "react";
import { Route, Switch } from "react-router-dom";
import {Image} from 'react-bootstrap';

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Post from "./views/Post";
import Upload from "./views/Upload";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/postview">
        <Post/>
      </Route>
      <Route exact path="/uploadview">
        <Upload/>
      </Route>
    </Switch>
  );
}