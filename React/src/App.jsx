import AlertClock from "./AlertClock"
import React, { useState } from 'react';
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
import { LanguageContext } from "./LanguageContext";

function App() {

    const [language, setLanguage] = useState('en')

    function handleLanguage(language) {
      setLanguage(language)
    }
    return (
      <div>
        <button onClick={() => handleLanguage('tr')}>TR</button>
        <button onClick={() => handleLanguage('en')}>EN</button>
        <Container title={<h2>My first title</h2>}>
          <LanguageContext.Provider value={language}>
            <Clock />
          </LanguageContext.Provider>
          
        </Container>
      </div>
    )
    
  }
export default App