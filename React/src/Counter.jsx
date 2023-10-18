import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({ initialValue = 0, incrementAmount = 1}) {
    const [counter, setCount] = useState(initialValue)
    function handleIncrement() {
        setCount(counter + incrementAmount)
    }
    function handleDecrement() {
        setCount(counter - incrementAmount)
    }
    function handleReset() {
        setCount(initialValue)
    }

    return (
        <div style={{
            backgroundColor: "greenyellow",
            border: "1px solid black"
        }}>
            <CounterDisplay count={counter} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter