import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const random = () => {
    const r = Math.floor(Math.random() * anecdotes.length);

    setSelected(r);
  };

  const calculateMaxVoted = (current, pointsSelected) => {
    console.log(points[max]);
    if (pointsSelected > points[max]) {
      console.log(points[max]);
      setMax(current);
    }
  };

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  let [max, setMax] = useState(0);

  return (
    <div>
      <h2>Anectode of the day</h2>

      {anecdotes[selected]}
      {points[selected] > 0 ? (
        <p>
          this anectode has {points[selected]}
          {points[selected] == 1 ? <> vote</> : <> votes</>}
        </p>
      ) : null}
      <div>
        <button onClick={random}>next anextode</button>
        <button
          onClick={() => {
            const copy = [...points];
            copy[selected] += 1;
            calculateMaxVoted(selected, copy[selected]);
            setPoints(copy);
          }}
        >
          vote
        </button>
      </div>
      {max == 0 && points[max] == 0 ? null : (
        <>
          <h2>Most Voted Anectode</h2>
          <p>{anecdotes[max]}</p>
          <p>
            has {points[max]} {points[max] == 1 ? <> vote</> : <> votes</>}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default App;
