import { useEffect, useState } from "react";

function GithubUser({ username }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json)
                setData(json)
            })  
    }, [username])

    return (
        <div>
            {data && <h1><a href={data.url}>{data.url}</a></h1>}
            {data && <h2>{data.login}</h2>}
            {data && <img src={data.avatar_url}></img>}
        </div>
    )
}

export default GithubUser;