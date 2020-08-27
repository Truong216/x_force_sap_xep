import * as ActionTypes from '../actionTypes';
import { account } from '../../constants';

export function login(accountInput) {
  if(accountInput.name === account.name && accountInput.password === account.password) {
    return {
      type: ActionTypes.LOGIN,
      payload: {
        isLogin: true,
      },
    };
  } else {
    return {
      type: ActionTypes.LOGIN,
      payload: {
        isLogin: false,
        isWrong: true,
      },
    }; 
  }
}

export function logout() {
  return {
    type: ActionTypes.LOGOUT,
    payload: {
      id,
    },
  };
}
