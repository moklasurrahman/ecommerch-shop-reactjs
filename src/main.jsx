import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cartContext';
import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <ToastContainer position="top-right" closeButton={false}/>
      <App />
    </CartProvider>
   
  </React.StrictMode>,
)
