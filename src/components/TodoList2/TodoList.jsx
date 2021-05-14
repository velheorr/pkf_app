import React from 'react'
import s from "./TodoList.module.css";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Input from "@material-ui/core/Input";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const TodoList = ({props}) => {
    const inputItem = (e)=>{props.inputText(e.target.value)}
    const addItem = ()=>{props.addTodo()}
    const editItem = (id)=>{props.inputId(id)}
    const deleteItem = (id)=>{
        props.inputId(id);
        props.deleteTodo();
    }

    const list = props.listItems.map((x, i) =><ListItems key={i} i={i} item={x} editItem={editItem} deleteItem={deleteItem}/>)

    return(
        <div>
            <div className={s.header}>Todo List 2</div><hr/>
            <div className={`${s.content} ${s.content_data}`}>
                <span>Todo: </span><Input  value={props.item_text} onChange={inputItem} />
                <Button size="small" variant="outlined" className={s.btnYes} startIcon={<PlaylistAddIcon />} onClick={addItem}>Add todo</Button>
            </div>
            <div className={s.todoBlock}>{list}</div>
        </div>
    )
}

const ListItems = ({item, i,editItem, deleteItem})=>{
    return(
        <div className={`${s.content} ${s.item}`}>
            <span>{++i}</span><span>{item.text}</span>
            <Button size="small" variant="outlined" color="secondary" startIcon={<DeleteForeverIcon />} onClick={()=>{deleteItem(item.id)}}>Delete</Button>
            <Button size="small" variant="outlined" color="primary" startIcon={<EditIcon />} onClick={()=>{editItem(item.id)}}>Edit</Button>
        </div>
    )
}

export default TodoList;