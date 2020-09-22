import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore ,applyMiddleware} from 'redux';
import reducer from './stores/reducers/reducer'
import SubApp  from './compomemts/subApp'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';

// import Utils from './utils/utils';
// import abpUserConfigurationService from './services/abpUserConfigurationService';
// import initializeStores from 'stores/storeInitializer';
// import registerServiceWorker from './registerServiceWorker';

// const stores = initializeStores();


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
<BrowserRouter>
  <App />
</BrowserRouter> ,
  document.getElementById('root')
);

// var store = createStore(reducer);

var store = createStore(reducer, applyMiddleware(thunk));
function render(){
  ReactDOM.render(
    
    <div>
      <div>
        {/* <SubApp store={store} /> */}

        <Provider store={store}><SubApp store={store} /></Provider>
      </div>
      <div>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </div>
    , document.getElementById('root'));
}
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
