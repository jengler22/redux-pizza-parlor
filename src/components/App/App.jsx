import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Pizzas from '../Pizzas/Pizzas.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Checkout from'../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          <Pizzas />
        </Route>
        <Route exact path="/customer-form">
          <CustomerForm />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>



      {/* extra code if you need it :D */}
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
