import { useEffect, useRef } from "react";

export function FocusableInput() {

    let inputRef = useRef(null);
    let mountRef = useRef(false);
    
    useEffect(() => {
        if(!mountRef.current) {
            mountRef.current = true;
            console.log("Mounting first time!")
        } else {
            console.log("Mounting again!")
        }

        inputRef.current?.focus()
    }, [])

    return (
        <input type="text" ref={inputRef}/>
    )
}