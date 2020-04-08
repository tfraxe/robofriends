import React from 'react'; //engine 
import ReactDOM from 'react-dom'; // engine is doing dom manipulation. we are rendering to a webpage. ReactNative renders to mobile.
import './index.css';
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './components/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <div>
  	<App />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
