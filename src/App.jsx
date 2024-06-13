import { useState } from "react";
import "./index.css";
import Numbers from "./components/Numbers";
import Previous from "./components/Previous";
import Next from "./components/Next";

function App() {
  const [page, setPage] = useState(1);

  const steps = [
    `Step 1: Start Computer`,
    `Step 2: Open Ms Word`,
    `Step 3: Click on Editor`,
  ];



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
          {<Previous page={page} setPage={setPage}/>}
          {<Next page={page} setPage={setPage} steps={steps}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
