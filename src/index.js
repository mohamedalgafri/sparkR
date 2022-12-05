import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/style.css';
import { LoginContextprovider } from './context/ContextLogin';
// import '../src/css/lightbox.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextprovider>
      <App />
    </LoginContextprovider>
  </React.StrictMode>
);

