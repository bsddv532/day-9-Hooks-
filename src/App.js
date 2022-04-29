import './App.css';
import StateDemo from './Components/StateDemo';
import './Components/Style.css'
import MainContextExample from './Components/UseContext/MainContextExample';
import UseeffectDemo from './Components/UseeffectDemo';

function App() {
  return (
    <div className="App">
      <h1>UNDERSTANDING OF HOOKS </h1>
      <h3>useState, useEffect, useContext</h3>
      <h3>useReducer, useCallback, useMemo, useRef</h3>
      <hr />
      
      <StateDemo />
      <hr/>
      <UseeffectDemo />
      <hr/>
    <MainContextExample/>

    </div>
  );
}

export default App;
