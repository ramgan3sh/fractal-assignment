import React from "react";
import Categories from "../components/Categories";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function TodoContainer() {
    return (
        <Router>
            <div className="todo-container">
                <h3>Todos</h3>
                <Route exact path="/">
                    <Categories />
                </Route>
                <Route path="/:category">
                    <TodoList />
                </Route>
            </div>
        </Router>
    )
}

export default TodoContainer;