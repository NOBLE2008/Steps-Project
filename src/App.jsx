import { useState } from 'react'
import './index.css'
import Numbers from './components/Numbers'

function App() {

  const {page, setPage} = useState(1)

  const steps = [
    `Step 1: Start Computer`,
    `Step 2: Open Ms Word`,
    `Step 3: Click on Editor`,
  ]

  return (
    <div className="container">
      <div className="steps">
        <div className='numbers'>
          {<Numbers page={page} step={steps[page-1]}/>}
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
