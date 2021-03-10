import s from "./Modal.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {renderField, validate} from '../../../reduxForm/reduxForm'
import Button from "@material-ui/core/Button";


const AddPBUserForm  = ({handleSubmit}) => {
    return (
        <form className={s.formDiv} onSubmit={handleSubmit}>
            {/*<TextField id="standard-basic" label="Standard" />*/}
            <Field name="department" label="Отдел:" component={renderField}/>
            <Field name="position" label="Должность:" component={renderField}/>
            <Field name="name" label="ФИО:" component={renderField}/>
            <Field name="number_ext" label="Городской номер:" component={renderField}/>
            <Field name="number_in" label="Внутренний номер:" component={renderField}/>

            {/*<div className={s.btns}><button>Сохранить</button></div>*/}
            <div className={`${s.btns} + ${s.btnsRight}`}><Button size="small" variant="outlined" className={s.btnYes} type="submit">Сохранить</Button></div>

        </form>
    )
}
const AddPBUserFormRedux = reduxForm({form: "addPBUser", validate})(AddPBUserForm);

export default AddPBUserFormRedux;

