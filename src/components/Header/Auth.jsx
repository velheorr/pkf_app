import s from "./Header.module.css";
import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const validationSchema = yup.object({
    login: yup
        .string('Enter your login')
        .required('Необходимо ввести логин'),
    password: yup
        .string('Enter your password')
        .min(4, 'Пароль должен быть не менее 4х символов')
        .required('Необходимо ввести пароль'),
});

const WithMaterialUI = ({getAuth}) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (val) => {getAuth(val);},
    });

    return (
        <div>
            <form className={s.login} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth id="login" name="login" label="Логин" value={formik.values.email}
                    onChange={formik.handleChange} error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}
                />
                <TextField
                    fullWidth id="password" name="password" label="Пароль" type="password" value={formik.values.password}
                    onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">Войти</Button>
            </form>
        </div>
    );
};

export default WithMaterialUI;

