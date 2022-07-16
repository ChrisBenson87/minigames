import './App.css';
import {Level1} from "./components/level1";
import {Level2} from "./components/level2";
import {Level3} from "./components/level3";
import {Level4} from "./components/level4";
import {Level5} from "./components/level5";
import {useState} from "react";

function App() {

  let [levelSelection, setLevelSelection] = useState([Level1, Level2, Level3, Level4, Level5]);

  let currentLevel = 0;

  const levelSelect = () => {
    currentLevel = Math.floor(Math.random() * 5 + 1);
    setLevelSelection = currentLevel;
  }

  return (
    <div className="App">
      <img></img>
      <div className = "startGame">
        <button onClick = {levelSelect}>Start Game</button>
        <Level1 levelSelection = {levelSelection} />
        <Level2 levelSelection = {levelSelection} />
        <Level3 levelSelection = {levelSelection} />
        <Level4 levelSelection = {levelSelection} />
        <Level5 levelSelection = {levelSelection} />
      </div>
    </div>
  );
}

export default App;
