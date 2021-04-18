import React from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import AddToDo from './Components/AddToDo';

class App extends React.Component {
  state = {
    todos: [
        {
          id: uuid(),
          title: "Finish Project 4",
          completed: false
        },
        {
          id: uuid(),
          title: "Take a Break!",
          completed: false
        }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
    })})
  } 

  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]});
  }

  addToDo = (title) => {
    let newTodo = {
        id: uuid(),
        title: title,
        completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
    console.log(this.state.todos[0]);
    return(
      <div className="todoListApp">
        <Header/>
        <ToDoList todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
