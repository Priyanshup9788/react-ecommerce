import Signup from "../Auth/Signup"
import { SIGNUP } from "./actions"

let initialState = {
    user: [
        {
            id:1,
            name: "Admin",
            email: "admin123@gmail.com",
            password: "Admin@1"
        }
    ]
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
        {
            console.log(action.payload)
            return {...state,user:[...state.user,action.payload]}
        }
        default:
            return state;
    }
}

export default UserReducer;