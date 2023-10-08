import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({ initialValue, incrementAmount}) {
    const [counter, setCount] = useState(initialValue)
    function handleIncrement() {
        setCount(counter + incrementAmount)
    }

    return (
        <div>
            <CounterDisplay count={counter} />
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter