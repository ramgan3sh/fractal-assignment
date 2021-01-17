import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, setActiveCategory } from "../actions/index";
import { useHistory } from "react-router-dom";

function Categories() {
    const [newCategoryState, updateNewCategoryState] = useState(false);
    const categories = useSelector(state => state.todo.categories);
    const dispatch = useDispatch();
    const history = useHistory();
    
    function insertNewCategory(e, state) {
        let cat = e.target.textContent;
        if(!state && cat !== "") {
            dispatch(addCategory(e.target.textContent));
            updateNewCategoryState(state);
        } else {
            updateNewCategoryState(state);
        }
    }

    function showTodoList(category) {
        history.push(category);
        dispatch(setActiveCategory(category));
    }

    return (
        <ul id="category-list">
            {
                categories.map(cat => {
                    return (
                        <li onClick={() => showTodoList(cat)}>{cat}</li>
                    )
                })
            }
            {newCategoryState ? <li contentEditable="true" onBlur={e => insertNewCategory(e, false)}></li> : null}
            <li onClick={(e) => insertNewCategory(e, true)}>Add another Category</li>
        </ul>
    )
}

export default Categories;