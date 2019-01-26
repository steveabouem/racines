import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './Routes';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
        <Route path="/:filter?" component={Routes} />
    </Router>
  </Provider>
);

export default Root;