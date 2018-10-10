import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BroswerHistory } from 'react-router'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
