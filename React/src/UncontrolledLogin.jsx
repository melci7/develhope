import { useState } from "react";

function UncontrolledLogin() {

    function handleData(event) {
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value;
        const password = event.target.elements.namedItem("password").value;
        const remember = event.target.elements.namedItem("remember").checked;

        const data = {
            username,
            password,
            remember
        }

        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleData}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="checkbox" name="remember"/>
                <button>Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}

export default UncontrolledLogin;