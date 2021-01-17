import React, {useState} from "react";
import { FaCheck, FaTrashAlt, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router";
import { markComplete, addTodo, deleteTodo, updateTodo } from "../actions/index";

function TodoList(props) {
    const [newTodoState, updateNewTodoState] = useState(false);
    const { todoList } = useSelector(state => ({
        todoList: state.todo.todoList
    }))
    const { category } = useParams();
    const dispatch = useDispatch();

    function addTask(e, state) {
        let todoContent = e.target.textContent;
        if (!state && todoContent !== "") {
            dispatch(addTodo({
                id: todoList.length,
                category: category,
                text: todoContent,
                completed: false
            }));
            updateNewTodoState(state);
        } else {
            updateNewTodoState(state);
        }
    }

    function deleteTask(e, id) {
        dispatch(deleteTodo(id));
    }

    function updateTask(e, id) {
        console.log(id);
        let taskContent = e.target.textContent;
        if(taskContent !== "") {
            dispatch(updateTodo({
                content: taskContent,
                id: id
            }))
        }
    }

    return (
        <ul id="todo-list">
            {
                todoList.filter(todo => todo.category === category).length === 0 ? <li>Looks empty...</li> : todoList.map(todo => {
                    return todo.category === category ? (
                        <li className={todo.completed ? "done" : ""}>
                            <FaCheck onClick={() => dispatch(markComplete({ id: todo.id, completed: !todo.completed }))} />
                            <p contentEditable={todo.completed ? "false" : "true"} onBlur={e => updateTask(e, todo.id)}>{todo.text}</p>
                            <FaTrashAlt onClick={e => deleteTask(e, todo.id)} />
                        </li>
                    ) : null
                })
            }
            {newTodoState ? (<li>
                <FaCheck />
                <p contentEditable={"true"} onBlur={e => addTask(e, false)}></p>
                <FaTrashAlt />
            </li>) : null}
            <li onClick={e => addTask(e, true)}><FaPlus /> Add Task</li>
        </ul>
    )
}

export default TodoList;