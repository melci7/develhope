import Hello from "./Hello"

function App() {

    return (
      <>
        {/* Displayed according to how many times the component has been called */}
        <div><Hello /> <Hello /></div>
      </>
    )
    
  }
export default App