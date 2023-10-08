import { useState } from "react"

function Counter({ initialValue, incrementAmount}) {
    const [counter, setCount] = useState(initialValue)
    function handleIncrement() {
        setCount(counter + incrementAmount)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter