import {
    LOGIN
} from "./actionConstants"

const initialState = {
    userId : undefined,
    userName : undefined
};

export default function LoginReducer(state = initialState, action) {
    console.log("Reducer",action)
    switch(action.type) {
        case LOGIN : return {...state,
            userId : action.data.id,
            userName : action.data.userName
        }
        default : return state
    }

}