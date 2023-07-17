import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, SetWeight] = useState(0);
  const [height, SetHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let cal = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      setBmi(bmi);

      if (bmi < 25) {
        setMessage("You are underWeight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You're healthy fit");
      } else {
        setMessage("You're overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return(
  <div className="App">
    <div className="container">
      <h1>BMI Calculator</h1>

      <form onSubmit={cal}>
        <div>
          <label>Weight (lbs)</label>
          <input value={weight} onChange={(e) => SetWeight(e.target.value)} />
        </div>

        <div>
          <label>Height (in)</label>
          <input
            value={height}
            onChange={(event) => SetHeight(event.target.value)}
          />
        </div>

        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>
        </div>
      </form>

      <div className="center">
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}

export default App;
