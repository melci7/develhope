import classes from './Clock.module.scss';

export function Container( {title, children} ) {
    return (
        <div>
            <div className={classes.children}>{children}</div>
            <div className={classes.title}>{title}</div>
        </div>
        
    )
}