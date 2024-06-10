import { useState } from 'react'
import './index.css'

function App() {

  const active = useState(1)

  return (
    <div className="container">
      <div className="steps">
        <div className='numbers'>
          
        </div>
        <div className="step">
          <p>Step 1: Press the windows button</p>
        </div>
        <div className="buttons">
          <button className='previous'>
            Previous
          </button>
          <button className='next'>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
