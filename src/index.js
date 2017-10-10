import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import initMockApi from './helpers/mockApi';

initMockApi();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
