import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="Good"/>
      <Button onClick={increaseNeutral} text="Neutral"/>
      <Button onClick={increaseBad} text="Bad"/>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const average =
    Math.round(((good - bad) / (good + neutral + bad)) * 1000) / 1000;
  const positive =
    Math.round(((good * 100) / (good + bad + neutral)) * 1000) / 1000;

  if (isNaN(average))
      return <p>No feedback given</p>

  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Neutral" value ={neutral} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="Average" value ={average} />
      <StatisticLine text="Positive" value ={positive} />

    </>
  );
};

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

export default App;
