import { useRef, useState } from "react";

export function TodoList() {
    const [items, setItems] = useState(["Study", "Read"]);
    const inputRef = useRef(null);
    function handleAddTask(event) {
        event.preventDefault();
        const todo = event.target.elements.namedItem("todo").value;
        setItems([...items, todo]);
        inputRef.current.value = "";
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input ref={inputRef} type="text" name="todo" placeholder="To do"/>
                <button>Add Task</button>
            </form>
            
            <ul>
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}