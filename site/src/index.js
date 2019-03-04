import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {store} from './store';
import Root from './components/RootComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
