import Age from "./Age"
function Welcome({ nameValue }) {
    
    return (
        <div className="welcome">
            <p>Welcome, {nameValue}!</p>
            {<Age age={19} />}
            
        </div>
    )
}

export default Welcome