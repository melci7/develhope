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
    function onLogin(event) {
        // Using this can prevent the default behavior
        event.preventDefault()
    }

    function handleReset() {
        setData({
            username: '',
            password: '',
            remember: 'false'
        })
    }
    return (
        <div>
            <form onSubmit={onLogin}>
                <input type="text" name="username" value={data.username} onChange={handleData}/>
                <input type="password" name="password" value={data.password} onChange={handleData}/>
                <input type="checkbox" name="remember" value={data.remember} onChange={handleData}/>
                <button style={{ backgroundColor: data.password.length < 8 ? 'red' : 'green' }} disabled = {!data.username || !data.password}>Login</button>
                <button onClick={handleReset} type="reset">Reset</button>
            </form>
        </div>
    )
}

export default Login;