import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import './index.css';
import App from './App';
import './media.css';
import './light.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

serviceWorkerRegistration.register();