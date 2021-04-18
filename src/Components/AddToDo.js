import React from "react";

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    updateTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="newTodo" 
                    placeholder="Add Todo..." 
                    style={{display: 'flex', width: '99%'}}
                    value={this.state.title}
                    onChange={this.updateTitle}
                    />
                <button type="submit" style={{flex: '2', width: '100%', backgroundColor: 'lightgray'}}>{'ADD'}</button>
            </form>
        );
    }
}

export default AddToDo;