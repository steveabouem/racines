import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes';

export default class Root extends React.Component {
  render() {
    return (
        <Router>
            <Route path="/:filter?" component={Routes} />
        </Router>
    );
  }
}