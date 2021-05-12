import { combineReducer } from 'react-redux';  

import  userReducer from './user/user.reducer';  

export default combineReducer({
    user: userReducer
}); 