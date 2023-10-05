function App() {

    
    function Welcome({ nameValue, age }) {
        return (
            <>
                <p>Welcome, {nameValue}!</p>
                <p>Your age is {age}</p>
            </>
        )
    }
    return (
      <>
        {/* JSX Expressions works too as a value */}
        <div><Welcome nameValue={<strong>Muhammed</strong>} age={24}/></div>
      </>
    )
    
  }
export default App