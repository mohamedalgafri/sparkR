import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/style.css';
// import '../src/css/lightbox.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

