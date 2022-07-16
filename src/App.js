import './App.css';
import {Level1} from "./components/level1";
import {Level2} from "./components/level2";
import {Level3} from "./components/level3";
import {Level4} from "./components/level4";
import {Level5} from "./components/level5";

function App() {

  let currentLevel = 0;

  const levelSelect = () => {
    currentLevel = Math.floor(Math.random() * 5 + 1);
    console.log(currentLevel)
  }

  if(currentLevel = 1) {
    return <Level1 />}

  else if(currentLevel = 2) {
    return <Level2 />}
  
  else if(currentLevel = 3) {
    return <Level3 />}
  
  else if(currentLevel = 4) {
    return <Level4 />}
  
  else if(currentLevel = 5) {
    return <Level5 />}

  return (
    <div className="App">
      <img></img>
      <div className = "startGame">
        <button onClick = {levelSelect}>Start Game</button>
      </div>
    </div>
  );
}

export default App;
