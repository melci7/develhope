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
    function resetTask(event) {
        event.preventDefault();
        setItems([]);
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input ref={inputRef} type="text" name="todo" placeholder="To do"/>
                <button>Add Task</button>
                <button type="reset" onClick={resetTask}>Reset</button>
            </form>
            
            <ul>
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}