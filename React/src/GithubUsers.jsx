import { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json)
                setData(json)
            })  
    }, [])

    function handleClick(username) {
        setUser(username);
    }

    return (
        <div>
            <ul>
            {data.map((user) =>
                (<li key={user.id} onClick={() => handleClick(user.login)}>{user.login}</li>)
            )}
            </ul>
            {setUser && <GithubUser username={user} />}
        </div>
    )
}

export default GithubUsers;