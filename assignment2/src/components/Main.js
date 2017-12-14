import React, {Component} from "react";
//import PropTypes from "prop-types";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";

const Main = () => (
    <div>
        <Header/>
        <Todolist/>
        <AddNewTodo />

    </div>
)

export default Main

// Main.propTypes = {
//     addTodoChanged: PropTypes.func.isRequired,
//     saveNewTodo: PropTypes.func.isRequired,
//     addTodoValue: PropTypes.string,
//     todoList: PropTypes.array.isRequired
// };