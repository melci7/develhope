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
import { TodoList } from "./TodoList";
import Counter from "./Counter";
import Clock from "./Clock";
import { Container } from "./Container";

function App() {

    return (
        <Container title={<h2>My first title</h2>}>
          <TodoList />
        </Container>
    )
    
  }
export default App