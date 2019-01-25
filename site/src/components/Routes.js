import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Events from './Events';
import FamilyTree from './FamilyTree';
import Guest from './Guest';
import Login from './Login';
import Profile from './Profile';

export default class Routes extends React.Component {
  render() {
    return (
      <main id = "MainContainer">
      <Switch>
        <Route exact path ="/" component = {Guest} />
        <Route exact path = "/info" component = {About} />
        <Route exact path = "/events" component = {Events} />
        <Route exact path = "/genealogie" component = {FamilyTree} />
        <Route exact path = "/connection" component = {Login} />
        <Route exact path = "/mon-profil" component = {Profile} />
      </Switch>
    </main>
    );
  }
}