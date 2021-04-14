import s from "./Header.module.css";
import React from "react";
import { useFormik } from 'formik';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {validationLogin} from "../../Formik/Formik";


const LoginForm = ({getAuth}) => {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {getAuth(values);}
    });

    return (
        <div>
            <form className={s.login} onSubmit={handleSubmit}>
                <TextField
                    fullWidth name="login" label="Логин" type="text" value={values.login}
                    onChange={handleChange} onBlur={handleBlur}
                />{touched.login && errors.login ? <div className={s.error}>{errors.login}</div> : null}
                <TextField
                    fullWidth name="password" label="Пароль" type="password" value={values.password}
                    onChange={handleChange} onBlur={handleBlur}
                />{touched.password && errors.password ? <div className={s.error}>{errors.password}</div> : null}
                <Button color="primary" variant="contained" fullWidth type="submit">Войти</Button>
            </form>
        </div>
    );
};

export default LoginForm;

