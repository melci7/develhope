import AlertClock from "./AlertClock"
import Welcome from "./Welcome"

function App() {

    return (
      <>
        <div><Welcome nameValue={"John"}/></div>
        <AlertClock />
      </>
    )
    
  }
export default App