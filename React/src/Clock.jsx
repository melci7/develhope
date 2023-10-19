import { useEffect, useState } from "react"
import classes from './Clock.module.scss';

function Clock() {
    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    }, [])
    
    return (
        <div>
            <h2 className={classes.border}>Current Time: <span className={classes.time} >{clock.toLocaleTimeString()}</span></h2>
        </div>
    )
}

export default Clock