import React from 'react';
import s from './ModalX.module.css'
import {connect} from "react-redux";
import {modalClose, modalOpen} from "../store/modalReducer";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from "@material-ui/icons/Edit";


const ModalX = (props) =>{
    const exitModal = () =>{props.modalClose()}

    return (
        <div>
            {props.modalState &&
            <ModalXInner exitModal={exitModal} modalTitle={props.modalTitle} modalBody={props.modalBody} modalWidth={props.modalWidth}/>
            }
        </div>
    )


}

const ModalXInner = ({exitModal, modalTitle, modalBody, modalWidth}) => {
    return (
        <div className={s.modalCover}>
            <div className={s.modal} style={modalWidth}>
                <div className={s.modalHead}>
                    <span>{modalTitle}</span>
                    <Button size="small" variant="contained" className={s.closeBtn} onClick={exitModal}><CloseIcon /></Button>
                </div>
                <div className={s.modalBody}>{modalBody}</div>
            </div>
        </div>
    )
}
/*<button className={s.closeBtn} onClick={exitModal}>x</button>*/


const mapStateToProps = (state) => ({
    modalState: state.modal.modalState,
    modalTitle: state.modal.modalTitle,
    modalBody: state.modal.modalBody,
    modalWidth: state.modal.modalWidth,
})


export default connect(mapStateToProps, {modalOpen, modalClose})(ModalX);