export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SAVE_TODO = "SAVE_TODO";

export function addTodoChanged(id) {
    return {
        type: ADD_TODO,
        id: id
    }
}

export function toggleStatus(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export function saveNewTodo(){
    return{
        type: SAVE_TODO
    }
}