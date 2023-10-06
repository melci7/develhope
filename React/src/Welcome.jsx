import Age from "./Age"

function Welcome({ nameValue }) {
    return (
        <>
            <p>Welcome, {nameValue}!</p>
            <Age age={24}/>
        </>
    )
}

export default Welcome