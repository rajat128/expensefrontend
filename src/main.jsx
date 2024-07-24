import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './component/User/Signup.jsx';
import Login from './component/User/Login.jsx';
// axios.defaults.baseURL = 'https://backendexpense-k9jp.vercel.app';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <App /> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
    </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
