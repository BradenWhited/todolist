import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component{
    render(){
        return this.props.todos.map((todo => (
            <ToDoItem key={todo.id} item={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>
        )));
    }
}

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDoList;