import s from "./Modal.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const EditPBUserForm  = ({handleSubmit, id, deleteUser}) => {
    return (
        <div>
            <form className={s.formDiv} onSubmit={handleSubmit}>
                <div><label>Отдел:</label><Field component="input" type="text" name={'department'}  placeholder={'Enter your message'} /></div>
                <div><label>Должность:</label><Field component="input" type="text" name={"position"} placeholder='Enter your message'/></div>
                <div><label>ФИО:</label><Field component="input" type="text" name={"name"} placeholder='Enter your message'/></div>
                <div><label>Городской номер:</label><Field component="input" type="text" name={"number_ext"} placeholder='Enter your message'/></div>
                <div><label>Внутренний номер:</label><Field component="input" type="text" name={"number_in"} placeholder='Enter your message'/></div>
                <hr/>
                <div className={s.btns}><button>Сохранить</button></div>
            </form>
            <button onClick={()=>{deleteUser(id)}}>Удалить</button>
        </div>
    )
}

export const EditPBUserFormRedux = reduxForm({form: "editPBUser"})(EditPBUserForm);

export default EditPBUserFormRedux;