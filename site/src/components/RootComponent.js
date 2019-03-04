import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes';

const Root = () => (
    <Router>
        <Route path="/:filter?" component={Routes} />
    </Router>
);

export default Root;