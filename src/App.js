import './App.css';
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import ModalX from "./ModalX/ModalX";
import PhoneBookContainer2 from "./components/PhoneBook2/PhoneBookContainer2";
import PermCandy from "./components/PermCandy/PermCandy";
import TodoListContainer2 from "./components/TodoList2/TodoListContainer2";

const App = () => {
    return (
        <div className='pkf_app'>
            <div className='pkf_header'><Header/></div>
            <div className='pkf_sidebar'><Sidebar/></div>
            <div className='pkf_app_wrapper'>
                <Switch>
                    <Route exact path='/' render={()=> <Redirect to={'/phonebook2'}/>} />
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/todolist2' render={() => <TodoListContainer2/>}/>
                    <Route path='/phonebook2' render={() => <PhoneBookContainer2/>}/>
                    <Route path='/permcandy' render={() => <PermCandy/>}/>
                    <Route path='*' render={() => <div>Error 404  "Страница не найдена"</div>}/>
                </Switch>
                <ModalX/>
            </div>
        </div>
    );
}

export default compose (
    withRouter,
    connect())(App);

