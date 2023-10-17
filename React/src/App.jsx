import AlertClock from "./AlertClock"
import React from 'react';
import { FocusableInput } from "./FocusableInput"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import MouseClicker from "./MouseClicker"
import MultiButton from "./MultiButton"
import UncontrolledLogin from "./UncontrolledLogin"
import Welcome from "./Welcome"
import { Colors } from "./Colors";

function App() {

    return (
        <Colors items={[
          {name: "Muhammed", id: 1},
          {name: "Kemal", id: 2},
          {name: "Emre", id: 3},
          {name: "Kaan", id: 4}
        ]}/>
    )
    
  }
export default App