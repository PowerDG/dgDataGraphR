import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';


// import Utils from './utils/utils';
// import abpUserConfigurationService from './services/abpUserConfigurationService';
import initializeStores from 'stores/storeInitializer';
// import registerServiceWorker from './registerServiceWorker';

const stores = initializeStores();
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
 
<Provider {...stores}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
