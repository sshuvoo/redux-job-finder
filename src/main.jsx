import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('jobfinder')).render(
   <React.StrictMode>
      <Router>
         <Provider store={store}>
            <App />
         </Provider>
      </Router>
   </React.StrictMode>
);
