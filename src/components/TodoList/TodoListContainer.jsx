import React, {useState} from 'react'
import s from "./TodoList.module.css";
import {connect} from "react-redux";
import {addItem, deleteItem, inputItem, inputItemId, updateItem} from "../../store/todoListReducer";

const TodoListContainer = (props) => {
    const inputItem = (e)=>{props.inputItem(e.target.value)};
    let [editTodo, setEditTodo] = useState(false);

    const addItem = ()=>{
        props.addItem();
        props.inputItem('');
    }

    const editItem = (val)=>{
        setEditTodo(true);
        props.inputItem(val.text);
        props.inputItemId(val.id);
    }
    const saveItem = ()=> {
        setEditTodo(false);
        props.updateItem();
    }
    const deleteItem = (id)=>{
        props.inputItemId(id);
        props.deleteItem()
    }


    let listItems = props.listItems.map((x, i) => <ListItems key={i} i={i} listItem={x} editItem={editItem} deleteItem={deleteItem} />);

    return (
        <div>
            <div className={s.header}>Todo List</div><hr/>

            <div className={`${s.filters} + ${s.content}`}>
                <input type="text" value={props.newItem} onChange={inputItem}/>
                { !editTodo && <button onClick={addItem}>Добавить</button> }
                { editTodo && <button onClick={saveItem}>Сохранить</button> }
            </div>
            {listItems}
        </div>
    )
}

const ListItems = ({listItem,i, editItem, deleteItem})=> {
    return (
        <div className={s.content}>
            <span>{i +1}</span><span className={s.listtxt}>{listItem.text}</span>
            <span className={s.listbtn}>
                <button onClick={()=>{editItem(listItem)}}>Edit</button>
                <button onClick={()=>{deleteItem(listItem.id)}}>Delete</button>
            </span>
        </div>
    )
}



const mapStateToProps = (state) => ({
    listItems: state.todoList.listItems,
    newItem: state.todoList.newItem,
    editItemId: state.todoList.editItemId,
})

export default connect(mapStateToProps,
    {inputItem, addItem, updateItem, inputItemId, deleteItem})
(TodoListContainer);