import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Checkout from'../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          <PizzaList />
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
    </div>
  );
}

export default App;
