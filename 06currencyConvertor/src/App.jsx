import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' text-3xl bg-orange-500'> Currency App</h1>
      <InputBox/>
    </>
  )
}

export default App
