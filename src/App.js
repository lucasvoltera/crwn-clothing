import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-components.jsx';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div>
      {/* Header is always present because it isnt inside switch */}
      <Header/> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;