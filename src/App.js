import './App.css';
import {level1} from "./components/level1";
import {level2} from "./components/level2";
import {level3} from "./components/level3";
import {level4} from "./components/level4";
import {level5} from "./components/level5";
import {useState} from "react";

function App() {

  const [levelSelection, setLevelSelection] = useState([level1, level2, level3, level4, level5]);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
