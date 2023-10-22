import { useState } from 'react';
import classes from './Clock.module.scss';

export function Container( {title, children} ) {
    const [click, setClick] = useState(false)


    function handleClick() {
        setClick((t) => !t)
    }
    return (
        <div>
            <div className={classes.title}>{title} <button onClick={handleClick}>Toggle</button></div>
            
            {click && <div className={classes.children}>{children}</div>}
        </div>
        
    )
}