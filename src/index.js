import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Main.sass';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
