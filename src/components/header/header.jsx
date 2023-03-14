import React from "react";
import { Link } from "react-router-dom";
import './header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
  
// this function returns the value we want to in the root reducer
// const mapStateToProps = (state) => {
//     return ({
//         currentUser: selectCurrentUser(state),
//         hidden: selectCartHidden(state)
//     });
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});


// pass two functions, the first one is the function we use to acess the state, where the state is the reducer, the otherone is the component
// this function will get a small reducer we need and connect it to the component.
export default connect(mapStateToProps)(Header);
