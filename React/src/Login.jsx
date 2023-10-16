import { useState } from "react";

function Login() {

    const[data, setData] = useState({
        username: '',
        password: '',
        remember: ''
    })

    function handleData(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }
    // I didn't understand the "When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state."
    function handleLogin(event) {
        event.preventDefault()
    }
    return (
        <div>
            <form>
                <input type="text" name="username" value={data.username} onChange={handleData}/>
                <input type="password" name="password" value={data.password} onChange={handleData}/>
                <input type="checkbox" name="remember" value={data.remember} onChange={handleData}/>
                <button disabled = {!data.username || !data.password} onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;