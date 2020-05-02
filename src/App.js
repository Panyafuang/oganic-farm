import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import './pages/homepage/homepage-component';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shoppage.component';



function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>
        <div className="container">
          <Route path='/shop' component={ShopPage}/>
        </div>
    </div>
  );
}

export default App;
