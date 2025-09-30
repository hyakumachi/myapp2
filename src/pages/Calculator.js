import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [title, setTitle] = useState("");
  let answer;
  const operation = thirdValue;
  const add = "+";
  const sub = "-";
  const multiply = "*";
  const modulo = "%";
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(`Hello, ${answer}`);
  }, [answer]);

  const handleCalculation = (e) => {
    if (operation === add) {
      answer = parseInt(firstValue) + parseInt(secondValue);
      alert(`The answer is: ${answer}`);
    } else if (operation === sub) {
      answer = parseInt(firstValue) - parseInt(secondValue);
      alert(`The answer is: ${answer}`);
    } else if (operation === multiply) {
      answer = parseInt(firstValue) * parseInt(secondValue);
      alert(`The answer is: ${answer}`);
    } else if (operation === modulo) {
      answer = parseInt(firstValue) % parseInt(secondValue);
      alert(`The answer is: ${answer}`);
    }
  };

  return (
    <div>
      <h1>Calculator Form</h1>
      <h2>{title}</h2>
      <form onSubmit={handleCalculation}>
        <div className="form-group">
          <label>First Value</label>
          <input
            type="integer"
            className="form-control"
            value={firstValue}
            required
            maxLength={20}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Operation</label>
          <input
            type="integer"
            className="form-control"
            value={thirdValue}
            required
            maxLength={20}
            onChange={(e) => setThirdValue(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Second Value</label>
          <input
            type="integer"
            className="form-control"
            value={secondValue}
            required
            maxLength={20}
            onChange={(e) => setSecondValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Calculator;
