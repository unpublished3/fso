import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const average =
    Math.round(((good - bad) / (good + neutral + bad)) * 1000) / 1000;
  const positive =
    Math.round(((good * 100) / (good + bad + neutral)) * 1000) / 1000;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive}/>
    </div>
  );
};

const Statistics = ({ good, neutral, bad, average, positive }) => (
  <>
    <h1>Statistics</h1>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>Average {average}</p>
    <p>Positive {positive}%</p>
  </>
);

export default App;
