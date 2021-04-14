import React, {useEffect} from 'react';
import '../../App.css';
import s from './Header.module.css'
import {connect} from "react-redux";
import {setLogin} from "../../store/loginReducer";
import {modalClose, modalOpen} from "../../store/modalReducer";
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LoginForm from "./Auth";


const Header = (props) => {

    useEffect(() => {props.modalClose();}, [props.isAuth]);
    const getAuth = (val) => {
        props.setLogin(val)
    }
    const auth = () =>{
        props.modalOpen("Авторизация пользователя", <LoginForm getAuth={getAuth} />, 350 )
    }

    return (
        <div>
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