import React, {useEffect} from 'react';
import '../../App.css';
import s from './Header.module.css'
import {LoginFormRedux} from "./Auth";
import {connect} from "react-redux";
import {setLogin} from "../../store/loginReducer";
import {modalClose, modalOpen} from "../../store/modalReducer";
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const Header = (props) => {

    useEffect(() => {props.modalClose();}, [props.isAuth]);
    const onSubmit =(val)=>{ props.setLogin(val)}
    const auth = () =>{
        props.modalOpen("Авторизация пользователя", <LoginFormRedux onSubmit={onSubmit} />, 300 )
    }

    return (
        <div>
            {/*<div><img src="../../img/logo.png" alt=""/></div>*/}
            <div className={s.fabrika}>Кондитерская фабрика "Пермская"</div>
            <div className={s.signIn}>
                {!props.isAuth && <Button startIcon={<VpnKeyIcon />} onClick={auth}></Button>}
                {props.isAuth && <div><PersonIcon /><span>{props.authedName}</span></div>}
                {/*<button>Выход</button>*/}
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    authedName: state.login.authedName,
})



export default connect(mapStateToProps, {setLogin, modalOpen, modalClose})(Header);