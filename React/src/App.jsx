function App() {

    function Welcome({ nameValue }) {
        return (
            <>
                <p>Welcome, {nameValue}!</p>
            </>
        )
    }
    return (
      <>
        <div><Welcome nameValue={"Muhammed"}/></div>
      </>
    )
    
  }
export default App