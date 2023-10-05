function App() {

    {/* We can give default value to the variable like this. */}
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
        {/* If there's no value in the component it just display "Welcome, !" */}
        <div><Welcome nameValue="Muhammed" age={24}/></div>
      </>
    )
    
  }
export default App