import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import Product from './landing_page/products/Products';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/support" element={<Support/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
