import Welcome from "./Welcome"

function App() {

    return (
      <>
        {/* JSX Expressions works too as a value */}
        <div><Welcome nameValue={<strong>Muhammed</strong>} age={24}/></div>
      </>
    )
    
  }
export default App