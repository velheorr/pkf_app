import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    addPBUser,
    deletePBUser,
    getList,
    setFinder,
    setList,
    setSortList,
    updatePBUser
} from "../../store/phoneBookReducer";
import PhoneBook from "./PhoneBook";
import {modalClose, modalOpen} from "../../store/modalReducer";

const PhoneBookContainer = (props) => {
    useEffect(()=>{props.getList()}, []) // начальная загрузка данных

    return <div><PhoneBook props={props}/></div>

}

const mapStateToProps = (state) => ({
        list: state.phoneBook.list,
        finder: state.phoneBook.finder,
        sortedList: state.phoneBook.sortedList,
        user: state.phoneBook.user,
        modalControl: state.modal.modalControl,
    })

export default connect(mapStateToProps,
    {getList, setList, setFinder, setSortList,addPBUser,updatePBUser,deletePBUser, modalOpen, modalClose})
(PhoneBookContainer);