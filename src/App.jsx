import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WindowTracker from './WindowTracker'

function App() {
  const [show, setShow] = useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }


  return (
    <div className="App">
     <button onClick={toggle}>Toggle window Tracker</button>
     {show && <h2><WindowTracker/></h2>}
    
    </div>
  )
}

export default App
