import './App.css';
import Game from './Game.js';
import RefreshButton from './RefreshButton';
import {useState} from "react";
import Finished from './Finished.js';

function App() {   
    const [valor, setValor] = useState("");
    const [lastCat, setLastCat] = useState(0);
    

  return (
    <div className="App">
        {lastCat!==2 && (<Game onQuery={setValor} onLastCategory={setLastCat}/>)} 
        <Finished query={valor}/>
        {lastCat ===2 && (<RefreshButton />)}
    </div>
  );
}

export default App;
