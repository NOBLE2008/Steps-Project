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

  const rightClickHandler = (e) => {
    page >= 1
      ? setPage(() => {
          return page + 1;
        })
      : setPage(1)
      console.log(page, steps.length)
    page + 1 === steps.length ? e.target.setAttribute('disabled', 'true') : ''
  }

  const leftClickHandler = (e) => {
    page >= 1
      ? setPage(() => {
          return page - 1;
        })
      : setPage(1)
      console.log(page, steps.length)
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
          <button className={`previous${page - 1 == 0 ? " disabled" : ""}`} disabled={page - 1 == 0 ? true : false}>Previous</button>
          <button
            className={`next${page - 1 == steps.length - 1 ? " disabled" : ""}`}
            disabled={page - 1 == steps.length - 1 ? true : false}
            onClick={rightClickHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
