import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import reportWebVitals from './utils/reportWebVitals';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-xxxxxxxxxx-x');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
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
