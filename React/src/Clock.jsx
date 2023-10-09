import { useEffect, useState } from "react"

function Clock() {
    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    }, [])
    
    return (
        <div>
            <h2>Current Time: {clock.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock