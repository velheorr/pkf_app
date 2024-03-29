import s from "./Modal.module.css";
import React from "react";
import Button from "@material-ui/core/Button";
import {useFormik} from "formik";
import {validationPBUser} from "../../../Formik/Formik";
import TextField from "@material-ui/core/TextField";


const EditPBUserForm = ({updateUserData,userProps, delUserData})=>{
    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            department: userProps.department,
            position: userProps.position,
            name: userProps.name,
            number_ext: userProps.number_ext,
            number_in: userProps.number_in,
        },
        validationSchema: validationPBUser,
        onSubmit: (val) => {updateUserData(val);},
    });
    return (
        <div>
            <form className={s.login} onSubmit={handleSubmit}>
                <TextField
                    name="department" label="Отдел" type="text" value={values.department} placeholder='Введите данные' fullWidth onChange={handleChange} onBlur={handleBlur}
                />{touched.department && errors.department ? <div className={s.error}>{errors.department}</div> : null}
                <TextField
                    name="position" label="Должность" type="text" value={values.position} placeholder='Введите данные' fullWidth onChange={handleChange} onBlur={handleBlur}
                />{touched.position && errors.position ? <div className={s.error}>{errors.position}</div> : null}
                <TextField
                    name="name" label="ФИО" type="text" value={values.name} placeholder='Введите данные' fullWidth onChange={handleChange} onBlur={handleBlur}
                />{touched.name && errors.name ? <div className={s.error}>{errors.name}</div> : null}
                <TextField
                    name="number_ext" label="Городской номер" type="text" value={values.number_ext} placeholder='Введите данные' fullWidth onChange={handleChange} onBlur={handleBlur}
                />{touched.number_ext && errors.number_ext ? <div className={s.error}>{errors.number_ext}</div> : null}
                <TextField
                    name="number_in" label="Внутренний номер" type="text" value={values.number_in} placeholder='Введите данные' fullWidth onChange={handleChange} onBlur={handleBlur}
                />{touched.number_in && errors.number_in ? <div className={s.error}>{errors.number_in}</div> : null}
                <div className={`${s.btns} + ${s.btnsRight}`}><Button size="small" variant="outlined" className={s.btnYes} type="submit">Сохранить</Button></div>
            </form>
            <div className={s.btns}><Button size="small" variant="outlined" color='secondary' onClick={()=>{delUserData(userProps._id)}}>Удалить</Button></div>
        </div>
    )
}

export default EditPBUserForm;