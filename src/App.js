import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-components.jsx';
import ShopPage from './pages/shop/shop';


function App() {
  return (
    <div className="App">
      <Switch>
        {/* component = component we want to render
            path = the path of the url
            exact = true or false, it means if the path needs to be interpreted with the / 
        */}
          <Route exact path='/' component = {HomePage} />
          <Route path = "/shop" component = {ShopPage} />
      </Switch >
    </div>
  );
}

export default App;
