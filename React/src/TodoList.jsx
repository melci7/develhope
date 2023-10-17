import { useState } from "react";

export function TodoList() {
    const [items, setItems] = useState(["Study", "Read"]);

    function handleAddTask(event) {
        event.preventDefault();
        const todo = event.target.elements.namedItem("todo").value;
        setItems([...items, todo]);
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input type="text" name="todo" placeholder="To do"/>
                <button>Add Task</button>
            </form>
            
            <ul>
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}