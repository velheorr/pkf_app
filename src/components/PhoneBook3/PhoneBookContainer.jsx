import React from "react";
import {connect} from "react-redux";


import Phonebook from "./Phonebook";



const PhoneBookContainer3 = (props) => {

    return <div><Phonebook/></div>
}

const mapStateToProps = (state) => ({
    list: state.phoneBook3.list,
    isAuth: state.login.isAuth

})

export default  connect (mapStateToProps, {})(PhoneBookContainer3);