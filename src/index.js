/*
  index.js: 
  Main file of the appliaction where all the react and store value is imported here
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './Style/style.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './Store';


ReactDOM.render(
 
  <Provider store={store}>
     {/* <div className="row"> */}
            {/* <div className="col-12"> */}
      		  	<div className="container-fluid">
                <App />
              </div>
     		 {/* </div> */}
      {/* </div> */}
  </Provider>,                                                                                                         

document.getElementById('root')
);


serviceWorker.unregister();
