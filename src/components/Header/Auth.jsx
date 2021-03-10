import s from "../Login/Login.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";


const LoginForm  = ({handleSubmit}) => {

    return (
        <form className={s.login} onSubmit={handleSubmit}>
            <div><label>Логин:</label><Field component="input" type="text" name="login"  placeholder='Введите логин' /></div>
            <div><label>Пароль:</label><Field component="input" type="password" name="password" placeholder='Введите пароль'/></div>
            <div><button >Вход</button></div>
        </form>
    )
}
export const LoginFormRedux = reduxForm({form: "loginForm"})(LoginForm);