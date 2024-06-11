import { useState } from "react";
import "./index.css";
import Numbers from "./components/Numbers";

function App() {
  const [page, setPage] = useState(1);

  const steps = [
    `Step 1: Start Computer`,
    `Step 2: Open Ms Word`,
    `Step 3: Click on Editor`,
  ];

  const leftClickHandler = (e) => {
    page >= 1
      ? setPage(() => {
          return page + 1;
        })
      : setPage(1)
      console.log(page, steps.length)
    page + 1 === steps.length ? e.target.setAttribute('disabled', 'true') : ''
  }

  return (
    <div className="container">
      <div className="steps">
        <div className="numbers">
          {steps.map((e, i) => {
            return <Numbers page={page} step={e} key={i} index={i} />;
          })}
        </div>
        <div className="step">
          <p>{steps[page - 1]}</p>
        </div>
        <div className="buttons">
          <button className="previous">Previous</button>
          <div className={`btnClass${page - 1 == steps.length - 1 ? " disabled" : ""}`}><button
            className={`next${page == steps.length - 1 ? " disabled" : ""}`}
            {...(page - 1 == steps.length - 1 ? " disabled" : "")}
            onClick={leftClickHandler}
          >
            Next
          </button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
