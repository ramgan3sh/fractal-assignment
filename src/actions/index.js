export function addTodo(payload) {
    return {
        type: "ADD_TODO",
        data: payload
    }
}

export function deleteTodo(payload) {
    return {
        type: "DELETE_TODO",
        data: payload 
    }
}

export function addCategory(payload) {
    return {
        type: "ADD_CATEGORY",
        data: payload
    }
}

export function setActiveCategory(payload) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        data: payload
    }
}

export function markComplete(payload) {
    return {
        type: "MARK_COMPLETE",
        data: payload
    }
}

export function updateTodo(payload) {
    return {
        type: "UPDATE_TODO",
        data: payload
    }
}