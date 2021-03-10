import s from "./Modal.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const renderField = ({ input, label, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <input {...input} type="text" placeholder="Введите данные"/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)



const AddPBUserForm  = ({handleSubmit}) => {
    return (
        <form className={s.formDiv} onSubmit={handleSubmit}>
            <Field name="department" label="Отдел:" component={renderField}/>
            <Field name="position" label="Должность:" component={renderField}/>
            <Field name="name" label="ФИО:" component={renderField}/>
            <Field name="number_ext" label="Городской номер:" component={renderField}/>
            <Field name="number_in" label="Внутренний номер:" component={renderField}/>


            {/*<div><label>Отдел:</label><Field component="input" type="text" name="department"  placeholder='Enter your message' /></div>
            <div><label>Должность:</label><Field component="input" type="text" name="position" placeholder='Enter your message'/></div>
            <div><label>ФИО:</label><Field component="input" type="text" name="name" placeholder='Enter your message'/></div>
            <div><label>Городской номер:</label><Field component="input" type="text" name="number_ext" placeholder='Enter your message'/></div>
            <div><label>Внутренний номер:</label><Field component="input" type="text" name="number_in" placeholder='Enter your message'/></div>*/}
            <hr/>
            <div className={s.btns}><button>Сохранить</button></div>
        </form>
    )
}
const AddPBUserFormRedux = reduxForm({form: "addPBUser"})(AddPBUserForm);

export default AddPBUserFormRedux;

