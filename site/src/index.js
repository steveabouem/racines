import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/loginPage.css';
import './styles/animations.css';
import {store} from './store';
import Root from './components/RootComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
