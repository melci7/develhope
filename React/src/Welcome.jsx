import Age from "./Age"

function Welcome({ nameValue }) {

    const userAge = null;
    return (
        <>
            <p>Welcome, {nameValue}!</p>
            {!!userAge && <Age age={userAge} />}
            {userAge === 0 && <Age age={userAge} />}
        </>
    )
}

export default Welcome