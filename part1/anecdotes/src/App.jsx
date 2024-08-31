import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [highest, setHighest] = useState(votes.indexOf(Math.max(...votes)));

  const selectAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    setVotes(
      votes.map((item, index) => (index === selected ? item + 1 : item))
    );
    if (votes[selected] + 1 > votes[highest]) setHighest(selected);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        <p> {anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={vote}>Vote</button>
        <button onClick={selectAnecdote}>Next Anecdote</button>
      </div>

      <div>
        <h1>Anecdote with the most votes</h1>
        <p> {anecdotes[highest]}</p>
        <p>has {votes[highest]} votes</p>
      </div>
    </div>
  );
};

export default App;
