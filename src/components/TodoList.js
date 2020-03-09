// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted, query }) => {
    return (
        <div className="todo-list">
            {todos.map(todo => {
                if (todo.task.toLowerCase().includes(query)) {
                    return <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
                }
            })}
        </div>
    )
}

export default TodoList;