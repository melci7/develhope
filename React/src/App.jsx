function App() {

    {/* We can give default value to the variable like this. */}
    function Welcome({ nameValue="Muhammed" }) {
        return (
            <>
                <p>Welcome, {nameValue}!</p>
            </>
        )
    }
    return (
      <>
        {/* If there's no value in the component it just display "Welcome, !" */}
        <div><Welcome /></div>
      </>
    )
    
  }
export default App