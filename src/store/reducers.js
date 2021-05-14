import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {phoneBookReducer} from "./phoneBookReducer";
import {modalReducer} from "./modalReducer";
import {reducer as formReducer} from 'redux-form';
import {permCandyReducer} from "./permCandyReducer";
import {todoListReducer2} from "./todoListReducer2";


const reducers = combineReducers({
    login: loginReducer,
    phoneBook: phoneBookReducer,
    form: formReducer,  //redux form
    modal: modalReducer,
    permCandy: permCandyReducer,
    todoList2: todoListReducer2,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;