function App() {

    function Hello() {
        return (
            <>
                <h2>Hello, World!</h2>
                <Message />
            </>
        )
        function Message() {
            return (
                <>
                    <p>What a beautiful day!</p>
                </>
            )
        }
    }
    return (
      <>
        {/* Displayed according to how many times the component has been called */}
        <div><Hello /> <Hello /></div>
      </>
    )
    
  }
export default App