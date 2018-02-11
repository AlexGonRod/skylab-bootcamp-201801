import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import TaskApp from './components/TaskApp';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaskApp />, document.getElementById('root'));
registerServiceWorker();
