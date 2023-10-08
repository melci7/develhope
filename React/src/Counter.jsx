import { useState } from "react"

function Counter() {
    const [counter, setCount] = useState(0)
    function handleIncrement() {
        setCount(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter