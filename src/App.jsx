import './index.css'

function App() {

  return (
    <div className="container">
      <div className="steps">
        <div className='numbers'>
          <div className="number"><p>1</p></div>
          <div className="number"><p>2</p></div>
          <div className="number"><p>3</p></div>
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
