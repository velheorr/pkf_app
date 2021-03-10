import React from 'react';
import s from "./PhoneBook.module.css";
import PhoneBookList from "./PhoneBookList/PhoneBookList";
import EditPBUserFormRedux from "./Modal/editPhoneBook";
import AddPBUserFormRedux from "./Modal/addPhoneBook";

const PhoneBook = ({props}) => {
    const listFilter = (e) => { //фильтр в таблице
        props.setFinder(e.target.value)
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
        let onSubmit = (val) => {
            props.addPBUser(val)
            props.modalClose()
        }
        props.modalOpen("Добавить запись", <AddPBUserFormRedux onSubmit={onSubmit}/> )
    }
    const deleteUser = (id) =>{
        let userProps = props.list.find(x => x._id === id);
        console.log(id)
        props.deletePBUser(userProps._id)
        props.modalClose()
    }


    const editUser = (id) => { // редактировать запись
        let userProps = props.list.find(x => x._id === id);
        let onSubmit = (val) => {
            props.updatePBUser(userProps._id, val)
            props.modalClose()
        }
        props.modalOpen("Редактировать запись", <EditPBUserFormRedux initialValues={userProps} id={userProps._id} onSubmit={onSubmit} deleteUser={deleteUser}/> )
    }

    const PhoneBookListItems = props.list.map(l => <PhoneBookList l={l} key={l._id} editUser={editUser}  />) // загрузка таблици

    return (
        <div>
            <div className={s.header}>Телефонная книга</div><hr/>

            <div className={`${s.filters} + ${s.content}`}>
                <button onClick={addUser}>Добавить</button>
                <div><span>Найти</span><input type="text" value={props.finder} onChange={listFilter} onClick={cleaner}/></div>
            </div>

            <div className={s.content}>
                <div className={s.titleBlock}>
                    <div className={s.twidth25}>Отдел</div>
                    <div className={s.twidth25}>Должность</div>
                    <div className={s.twidth25}>ФИО</div>
                    <div className={s.twidth10}>Городской</div>
                    <div className={s.twidth10}>Внутренний</div>
                    <div className={s.twidth5}>Edit</div>
                </div>
                <div className={s.bodyTitle}>
                    {PhoneBookListItems}
                </div>
            </div>
        </div>
    )
}

export default PhoneBook;