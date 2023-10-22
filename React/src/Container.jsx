import classes from './Clock.module.scss';

export function Container( {children} ) {
    return (
        <div className={classes.children}>{children}</div>
    )
}