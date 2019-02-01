import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Events from './events/Events';
import FamilyTree from './FamilyTree';
import Guest from './Guest';
import Login from './login/Login';
import Profile from './profile/Profile';
import { directory } from '../assets/images/icons/directory';//set redux to make the links below dynamic
import Gallery from './Gallery';

export default class Routes extends React.Component {
  render() {
    return (
      <main id = "main-container">
      <Switch>
        <Route exact path ="/" component = {Guest} />
        <Route exact path = "/info" component = {About} />
        <Route exact path = "/evenements" component = {Events} />
        <Route exact path = "/genealogie" component = {FamilyTree} />
        <Route exact path = "/connexion" component = {Login} />
        <Route exact path = "/profil" component = {Profile} />
        <Route exact path = "/album" component = {Gallery} />
      </Switch>
    </main>
    );
  }
}