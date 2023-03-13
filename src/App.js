import React from 'react';
import './App.css';
import { Switch , Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-components.jsx';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
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

    const {setCurrentUser} = this.props;

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
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        });

        // console.log(this.state);
      }
      else {
        setCurrentUser(userAuth);
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
        <Header /> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
  
        </Switch>
      </div>
    );  
  }
}

const mapStateToProps = ({user}) => {
  return ({
    currentUser: user.currentUser
  })
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);