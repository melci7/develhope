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

    function removeItem(index) {
        const newArray = [...items];
        newArray.splice(index, 1);
        setItems(newArray);
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input ref={inputRef} type="text" name="todo" placeholder="To do"/>
                <button>Add Task</button>
                <button type="reset" onClick={resetTask}>Reset</button>
            </form>
            
            <ul>
                {items.map((item, index) => (<li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button></li>))}
            </ul>
        </div>
    )
}