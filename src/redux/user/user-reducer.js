import { userActionTypes } from "./user-types";
// reducer is a function that gets two properties: currentState and action.
// action is an object that has a 'type' that is a string to tell us what specific action it is
//  action also has update, that can be anything, but usually is related to something we want to do.

// default value for when the component is rendering for the first time
// its the this.state we use on the constructor method
const INITIAL_STATE = {
    currentUser: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case userActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;