import AlertClock from "./AlertClock"
import Welcome from "./Welcome"

function App() {
  function currentTime() {
    const time = new Date()
    alert(time.toLocaleTimeString())
  }
  return (
      <>
        <div><Welcome nameValue={"John"}/></div>
        <AlertClock handleTime={currentTime}/>
      </>
  )
    
}
export default App