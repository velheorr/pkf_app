import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {phoneBookReducer} from "./phoneBookReducer";
import {modalReducer} from "./modalReducer";
import {reducer as formReducer} from 'redux-form';
import {todoListReducer} from "./todoListReducer";
import {permCandyReducer} from "./permCandyReducer";
import {phoneBookReducer3} from "./phoneBookReducer3";



const reducers = combineReducers({
    login: loginReducer,
    phoneBook: phoneBookReducer,
    form: formReducer,  //redux form
    modal: modalReducer,
    todoList: todoListReducer,
    permCandy: permCandyReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;