import {
    LOGIN,
    SOCIAL_LOGIN,
    SIGNUP,
    SOCIAL_SIGNUP,
    LOGOUT,
} from './actionConstants';
import {BASE_URL, USERS, AUTHENTICATE} from '../constants';

export const loginUser = (userCredentials) => (dispatch) => {
    const {userName,password} = userCredentials;
    console.log("Action",userName+password);
    const response = fetch(`${BASE_URL + AUTHENTICATE}` , {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: userName,
    secondParam: password
  })
    }).then(response.json())
    .then((json) => {
        if(json.status)
        {
          // dispatch({type:LOGIN})
            console.log("Success",json);
        }else {
          // dispatch({type:LOGIN})
            console.log("Error",json);
        }
    })
    .catch((error) => {
      // dispatch({type:LOGIN})
        console.error(error);
      });
}