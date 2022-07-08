import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <td>
      {text} {value}
    </td>
  );
};
const Statistics = ({ good, bad, neutral }) => {
  const getAverage = () => {
    return Math.abs(good - bad) / (good + bad + neutral);
  };
  const getPositive = () => {
    return (good / (good + bad + neutral)) * 100;
  };
  if (good == 0 && bad == 0 && neutral == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <td>average {getAverage()}</td>
        </tr>
        <tr>
          <td>positive {getPositive()}%</td>
        </tr>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1> give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
