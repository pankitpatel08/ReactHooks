import React from 'react';

import './App.css';
import ClassComponent from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterObj from './Components/HookCounterObj'
import HookCounterArray from './Components/HookCounterArray'
import HookCounterEffect from './Components/HookCounterEffect'
import HookMouse from './Components/HookMouse'
import MouseContainer from './Components/MouseContainer'
import IntervalHookCounter from './Components/IntervalHookCounter'

function App() {
  return (
    <div className="App">
      {/* <ClassComponent></ClassComponent> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterObj></HookCounterObj> */}
      {/* <HookCounterArray></HookCounterArray> */}
      {/* <HookCounterEffect></HookCounterEffect> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      <IntervalHookCounter />
    </div>
  );
}

export default App;
