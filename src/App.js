import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-components.jsx';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import {auth, createUserProfileDocument} from './firebase/firebase-utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    // being aware when someone sign in or sign out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});

      // if user signs in
      if (userAuth) {
        // get the user reference in the firebase
        const userRef = await createUserProfileDocument(userAuth);
        // get the data from that reference
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data());
          // use the snapshot data to update the current user state
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });

        // console.log(this.state);
      }
      else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        {/* Header is always present because it isnt inside switch */}
        <Header currentUser = {this.state.currentUser} /> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
  
        </Switch>
      </div>
    );  
  }
}

export default App;