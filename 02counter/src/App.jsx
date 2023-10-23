import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    //const [intial value, method/function] = useState(default value)
    let [counter,setCounter]=useState(15)
    //let counter = 15
    const increaseValue = () => {
      if(counter<20)
     {  setCounter(counter+1)}
      // console.log(counter);
    };

    const decreaseValue = ()=>{
     if (counter>0) {
       setCounter(counter-1)
       }
    }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Value is : {counter}</h2>
      <button onClick={increaseValue}>Increase Value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App
