import { useEffect, useState, useContext } from "react"
import classes from './Clock.module.scss';
import { LanguageContext } from "./LanguageContext";

function Clock() {
    const [clock, setClock] = useState(new Date())
    const language = useContext(LanguageContext)
    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    }, [])
    
    return (
        <div>
            <h2 className={classes.border}>{language === 'en' ? 'Current Time:' : 'Saat:'}<span className={classes.time} >{clock.toLocaleTimeString()}</span></h2>
        </div>
    )
}

export default Clock