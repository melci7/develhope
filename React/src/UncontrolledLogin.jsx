import { useState } from "react";

function UncontrolledLogin() {

    function handleData(event) {
        event.preventDefault()
        // FormData is more simple usage
        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === 'on' ? true : false,
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