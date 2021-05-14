import s from "../PhoneBook.module.css";
import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";



const PhoneBookList = ({ l, editUser, isAuth}) => {

    return (
        <div className={s.bodyBlock} >
            <div className={s.twidth25}>{l.department}</div>
            {isAuth && <div className={s.twidth25}>{l.position}</div>}
            {!isAuth && <div className={s.twidth30}>{l.position}</div>}
            <div className={s.twidth25}>{l.name.length >=2 ? <span>{l.name}</span> : ' '}</div>
            <div className={s.twidth10}>
                {l.number_ext.length >= 2 ? <Chip variant="outlined" size="small" label={l.number_ext}/> : ' '}
            </div>
            <div className={s.twidth10}>
                {l.number_in.length >=2 ? <Chip variant="outlined" size="small" label={l.number_in} /> : ' '}
            </div>
            {isAuth && <div className={`${s.twidth5} ${s.invis}`}>
                    <Button size="small" variant="outlined" className={`${s.editTable}`} onClick={()=> editUser(l._id)}><EditIcon/></Button>
                </div>
            }

        </div>
    )

}


export default PhoneBookList;