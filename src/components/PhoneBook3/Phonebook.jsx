import React from 'react';
import s from "./PhoneBook.module.css";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
import Input from "@material-ui/core/Input";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneIcon from "@material-ui/icons/Phone";
import PhoneBookList from "./PhoneBookList/PhoneBookList";

const PhoneBook = (props) => {
    return (
        <div id={s.sectionPrint}>
            <div className={s.header}>Телефонная книга 3</div><hr/>

            <div className={`${s.filters} + ${s.content} + ${s.invis}`}>
                <Button size="small" variant="contained" className={s.btnYes}>Добавить</Button>
                <Button size="small" variant="contained" className={s.btnPrint} startIcon={<PrintIcon />} >Печать</Button>
                <div className={s.searcher}><span>Найти: </span><Input value={''}  /></div>
            </div>

            <div className={s.content}>
                <div className={s.titleBlock}>
                    <div className={s.twidth25}>Отдел</div>
                    {props.isAuth && <div className={s.twidth25}>Должность</div>}
                    {!props.isAuth && <div className={s.twidth30}>Должность</div>}
                    <div className={s.twidth25}>ФИО</div>
                    <div className={s.twidth10}><PhoneAndroidIcon/></div>
                    <div className={s.twidth10}><PhoneIcon/></div>
                    {props.isAuth && <div className={`${s.twidth5} + ${s.invis}`}>Ред.</div>}
                </div>
                <div className={s.bodyTitle}>
                    <PhoneBookList  isAuth={props.isAuth}/>
                </div>
            </div>
        </div>
    )
}



export default PhoneBook;