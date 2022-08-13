import {combineReducers} from "redux"
import userReducer from "./userReducer"

    const reducer = combineReducers({
        userId: userReducer ,
    })
export default reducer