import Age from "./Age"

function Welcome({ nameValue }) {
    
    const userAge = 64;
    return (
        <>
            <p>Welcome, {nameValue}!</p>
            {(userAge > 18 && userAge < 65) && <Age age={userAge} />}
            
        </>
    )
}

export default Welcome