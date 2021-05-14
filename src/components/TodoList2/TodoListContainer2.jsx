import React from 'react'
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodo, deleteTodo, inputId, inputText} from "../../store/todoListReducer2";


const TodoListContainer2 = (props) => {

    return (
        <div>
            <TodoList props={props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listItems: state.todoList2.listItems,
    item_text: state.todoList2.item_text,
    item_id: state.todoList2.item_id,
})

export default connect(mapStateToProps,{inputText, addTodo, inputId,deleteTodo})(TodoListContainer2);
