import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Customers from './customers';
import Survey from './survey'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Survey/>,document.getElementById('root'))
serviceWorker.unregister();
