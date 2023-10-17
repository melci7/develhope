import { useEffect, useRef } from "react";

export function FocusableInput() {
    let inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <input type="text" ref={inputRef}/>
    )
}