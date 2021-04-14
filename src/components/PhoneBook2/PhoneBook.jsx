import React from 'react';
import s from "./PhoneBook.module.css";
import PhoneBookList from "./PhoneBookList/PhoneBookList";
import EditPBUserFormRedux from "./Modal/editPhoneBook";
import AddPBUserFormRedux from "./Modal/addPhoneBook";
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PrintIcon from '@material-ui/icons/Print';
import AddPBUserForm from "./Modal/addPhoneBook";
import EditPBUserForm from "./Modal/editPhoneBook";

const PhoneBook = ({props}) => {
    const listFilter = (e) => { //фильтр в таблице
        props.setFinder(e.target.value) //данные поиска
        let findx = props.finder
        if(findx.length <= 1) {props.getList(); }
        else{
            let filteredVal = props.list.filter(x => {
                return x.department.toLowerCase().includes(findx)
                    || x.name.toLowerCase().includes(findx)
                    || x.number_ext.toLowerCase().includes(findx)
                    || x.number_in.toLowerCase().includes(findx)
                    || x.position.toLowerCase().includes(findx)
            });
            props.setList(filteredVal);
        }
    }

    const cleaner = () => { // очистка поиска
        props.setFinder(''); //очистить инпут поиска
        props.getList(); // загрузить данные заново
    }

    const addUser = () => { // добавить запись
        let setUserData = (val)=>{
            props.addPBUser(val)
            props.modalClose()
        }
        props.modalOpen("Добавить запись", <AddPBUserForm setUserData={setUserData}/> )
    }

    const editUser = (id) => { // редактировать запись и удалить
        let userProps = props.list.find(x => x._id === id);

        let updateUserData = (val) => {
            props.updatePBUser(userProps._id, val)
            props.modalClose()
        }
        let delUserData = (id)=> {
            props.deletePBUser(id)
            props.modalClose()
        }
        props.modalOpen("Редактировать запись", <EditPBUserForm userProps={userProps} id={userProps._id} updateUserData={updateUserData} delUserData={delUserData}/> )
    }

    const print=()=>{window.print();} //печать таблици

    const PhoneBookListItems = props.list.map(l => <PhoneBookList l={l} key={l._id} editUser={editUser} isAuth={props.isAuth}  />) // загрузка таблици


    return (
        <div id={s.sectionPrint}>
            <div className={s.header}>Телефонная книга</div><hr/>

            <div className={`${s.filters} + ${s.content} + ${s.invis}`}>
                {props.isAuth && <Button size="small" variant="contained" className={s.btnYes} onClick={addUser}>Добавить</Button>}
                <Button size="small" variant="contained" className={s.btnPrint} startIcon={<PrintIcon />} onClick={print}>Печать</Button>
                <div className={s.searcher}><span>Найти: </span><Input value={props.finder} onChange={listFilter} onClick={cleaner} /></div>
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
                    {PhoneBookListItems}
                </div>
            </div>
        </div>
    )
}

export default PhoneBook;