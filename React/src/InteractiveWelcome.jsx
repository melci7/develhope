import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {

    const[getUsername, setUsername] = useState({
        username: ''
    })

    function handleUsername(event) {
        const name = event.target.name;
        const value = event.target.value;

        setUsername((data) => {
            return {
                ...data,
                [name] : value,
            }
        })
    }

    return (
        <div>
            <input type="text" name="username" value={getUsername.username} onChange={handleUsername}/>
            {<Welcome nameValue={getUsername.username}/>}
        </div>
    )
}

export default InteractiveWelcome;