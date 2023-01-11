import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer


})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))