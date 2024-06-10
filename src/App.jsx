import { useState } from 'react'
import './index.css'
import Numbers from './components/Numbers'

function App() {

  const {page, setPage} = useState(1)

  const steps = [
    `Step 1: Start Computer`,
    `Step 2: Open Ms Word`,
    `Step 3: Click on Editor`
  ]

  return (
    <div className="container">
      <div className="steps">
        <div className='numbers'>
          {steps.map((e, i) => {
            return <Numbers page={page} step={e} key={i} index={i}/>
          })}
        </div>
        <div className="step">
          <p>Step 1: Press the windows button</p>
        </div>
        <div className="buttons">
          <button className='previous'>
            Previous
          </button>
          <button className='next' onClick={() => {
            page>= 1 ? setPage(() => {
              return (page + 1)
            }) : console.log('Page does not exist')
          }}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
