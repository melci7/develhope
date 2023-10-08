import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({ initialValue, incrementAmount}) {
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
        <div>
            <CounterDisplay count={counter} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter