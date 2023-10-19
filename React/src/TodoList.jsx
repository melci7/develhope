import { useRef, useState } from "react";
import classes from './TodoList.module.scss';

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
        <div className={classes.div} >
            <form className={classes.form} onSubmit={handleAddTask}>
                <input ref={inputRef} type="text" name="todo" placeholder="To do"/>
                <button className={classes.button}>Add Task</button>
                <button className={classes.button} type="reset" onClick={resetTask}>Reset</button>
            </form>
            
            <ul className={classes.ul}>
                {items.map((item, index) => (<li className={classes.li} key={index}>{item} <button className={classes.resetButton} onClick={() => removeItem(index)}>Remove</button></li>))}
            </ul>
        </div>
    )
}