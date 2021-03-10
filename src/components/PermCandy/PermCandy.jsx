import React, {useEffect, useState} from 'react'

import {connect} from "react-redux";
import PKshop from "./PKshop";
import {setInitList} from "../../store/permCandyReducer";




const PermCandy =(props)=> {
    /*useEffect(()=>{props.setInitList()}, []) // начальная загрузка данных*/

    return <PKshop props={props}/>
}


const mapStateToProps = (state) => ({
    list: state.permCandy.list,
})

export default connect(mapStateToProps,
    {setInitList})
(PermCandy);