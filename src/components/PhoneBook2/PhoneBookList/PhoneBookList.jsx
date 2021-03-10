import s from "../PhoneBook.module.css";
import React from "react";


const PhoneBookList = ({ l, editUser}) => {
    return (
        <div className={s.bodyBlock} >
            <div className={s.twidth25}>{l.department}</div>
            <div className={s.twidth25}>{l.position}</div>
            <div className={s.twidth25}>{l.name}</div>
            <div className={s.twidth10}>{l.number_ext}</div>
            <div className={s.twidth10}>{l.number_in}</div>
            <div className={s.twidth5}>
                <button onClick={()=> editUser(l._id)}>Edit</button>
            </div>
        </div>
    )

}


export default PhoneBookList;