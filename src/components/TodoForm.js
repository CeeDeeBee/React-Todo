import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleChange = e => {
        this.setState({ formValue: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.formValue);
        this.setState({ formValue: '' })
    }

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="New Todo"
                        value={this.state.formValue}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;