
{/* We can give default value to the variable like this. */}
function Welcome({ nameValue="Muhammed" }) {
    return (
        <>
            <p>Welcome, {nameValue}!</p>
        </>
    )
}

export default Welcome