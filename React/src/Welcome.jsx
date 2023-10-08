import Age from "./Age"

function Welcome({ nameValue }) {
    
    const userAge = 20;
    return (
        <>
            <p>Welcome, {nameValue}!</p>
            {userAge > 18 && <Age age={userAge} />}
            
        </>
    )
}

export default Welcome