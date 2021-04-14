import React from "react";
import s from "./reduxForm.module.css"
import TextField from '@material-ui/core/TextField';

export const renderField = ({ input, label, meta: { touched, error, warning } }) => (
        <div>
            <TextField label={label} {...input} type="text" placeholder="Введите данные" />
            {touched && ((error && <span className={s.error}>{error}</span>))}
        </div>

 )

export const validate = values => {
    const errors = {}
    if (!values.department) {errors.department = 'Поле не может быть пустым*'}
    if (!values.position) {errors.position = 'Поле не может быть пустым*'}
    if (!values.name) {errors.name = 'Поле не может быть пустым*'}
    if (!values.number_ext) {errors.number_ext = 'Поле не может быть пустым*'}
    if (!values.number_in) {errors.number_in = 'Поле не может быть пустым*'}
    return errors
}



