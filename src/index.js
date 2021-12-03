import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import allReducer from './states/reducers';
import { Provider } from 'react-redux';

import reportWebVitals from './utils/reportWebVitals';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.UA_ANALYTICS); // 'UA-xxxxxxxxxx-x'
ReactGA.pageview(window.location.pathname + window.location.search);

const store = createStore(allReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

function sendToAnalytics({ id, name, value }) {
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
