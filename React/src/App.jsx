function App() {

    
    function Welcome({ nameValue }) {
        return (
            <>
                <p>Welcome, {nameValue}!</p>
                <Age age={24} />
            </>
        )
        function Age({ age }) {
            return (
                <>
                    <p>Your age is {age}</p>
                </>
            )
        }
    }
    return (
      <>
        {/* JSX Expressions works too as a value */}
        <div><Welcome nameValue={<strong>Muhammed</strong>}/></div>
      </>
    )
    
  }
export default App