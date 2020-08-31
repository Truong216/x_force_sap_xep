import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import inforBookReducer from './inforBookReducer';

const reducer = combineReducers({
  loginReducer,
  inforBookReducer,
})

export default reducer;