import s from "./Modal.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {renderField, validate} from '../../../reduxForm/reduxForm'
import Button from "@material-ui/core/Button";

const EditPBUserForm  = ({handleSubmit, id, deleteUser}) => {
    return (
        <div>
            <form className={s.formDiv} onSubmit={handleSubmit}>
                <Field name="department" label="Отдел:" component={renderField}/>
                <Field name="position" label="Должность:" component={renderField}/>
                <Field name="name" label="ФИО:" component={renderField}/>
                <Field name="number_ext" label="Городской номер:" component={renderField}/>
                <Field name="number_in" label="Внутренний номер:" component={renderField}/>
                <div className={`${s.btns} + ${s.btnsRight}`}><Button size="small" variant="contained" className={s.btnYes} type="submit">Сохранить</Button></div>
            </form>
            <div className={s.btns}><Button size="small" variant="contained" color="secondary" onClick={()=>{deleteUser(id)}}>Удалить</Button></div>
        </div>
    )
}

export const EditPBUserFormRedux = reduxForm({form: "editPBUser", validate})(EditPBUserForm);

export default EditPBUserFormRedux;