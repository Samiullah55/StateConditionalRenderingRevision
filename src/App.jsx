import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  // date.serDate(date.getDate() + count);
  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  return (
    <div>
      <div className="close" onClick={() => setOpen(!open)}>
        {open ? <div>&times;</div> : <div>&#8634;</div>}
      </div>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            step {step} {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
