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
        {/* Because of my Message component inside the Hello component, It's not displaying the message. */}
        <div><Message /></div>
      </>
    )
    
  }
export default App