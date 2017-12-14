import { ADD_TODO, TOGGLE_TODO, SAVE_TODO } from "./actions/index";

export default function todoListApp(state, action) {
    let newState = Object.assign({}, state);

    let todoList = newState.todoList.slice(); //.slice() to keep immutability
    let newTodoItem = {};
    const lastId = todoList[todoList.length - 1].id;

    switch (action.type) {
        case TOGGLE_TODO:
            for (let i = 0; i < todoList.length; i++) {
                let todo = todoList[i];
                let id = action.id;
                if (todo.id == id) {
                    todo.status = (todo.status) ? 0 : 1;
                    break;
                }
            }
            newState = Object.assign({}, newState, {todoList});
            break;

        case ADD_TODO:
            newState = Object.assign({}, newState, {"addTodoValue": action.id});
            break;

        case SAVE_TODO:
            newTodoItem.id = lastId + 1;
            newTodoItem.key = lastId + 1;
            newTodoItem.text = newState.addTodoValue;
            newTodoItem.status = 0;
            todoList.push(newTodoItem);
            newState = Object.assign({}, newState, {todoList, "addTodoValue": ""});
            break;

        default:
            return state;
    }
    return newState;
}
