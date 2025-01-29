import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React 🕷️",
  "Apply for job 🏢",
  "Invest your new income 🤑",
];

export default function App (){
  return <>
  <Steps/>
  <Steps/>
  </>
}


 function Steps() {
  let [step, setStep] = useState(1);
  let [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((cur) => cur - 1);
      setStep((cur) => cur - 1)
      // setStep(step-1)
      // setStep(step-1)
    }
  }

  function handleNext() {
    if (step < 3) setStep((cur) => cur + 1);
  }
  return (
    <>
      <h3 onClick={() => setOpen((is) => setOpen(!is))} className="close">
        ✖️
      </h3>
      {isOpen && (
        <div className="step-container">
          <div className="steps-number">
            <h5 className={step >= 1 ? "active" : ""}>1</h5>
            <h5 className={step >= 2 ? "active" : ""}>2</h5>
            <h5 className={step >= 3 ? "active" : ""}>3</h5>
          </div>
          <h3>
            Step {step} : {messages[step - 1]}{" "}
          </h3>
          <div className="button-container">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
