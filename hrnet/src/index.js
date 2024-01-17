import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import Routing from './Routing'
import { Provider } from "react-redux";
import store from "./database/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <Routing />
      </Provider>
    </Router>
  </React.StrictMode>
);
