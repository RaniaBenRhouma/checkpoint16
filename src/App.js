import React from 'react';
import './App.css';
import {Profile} from "./profile/Profile"
function App() {
  const handleeName = name => alert (name);
  return (
    <div>
    <Profile fullName="Rania Ben Rhouma" bio="je suis diplomée comme ingénieur info indus from ENETCom Sfax" profession="Developpeur" handleName={handleeName}>https://www.orthocaremedical.com/wp-content/uploads/person-icon.png</Profile>

    </div>
  );
}

export default App;
