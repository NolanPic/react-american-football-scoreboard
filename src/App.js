//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TeamScore from './components/TeamScore';
import IncrementScoreBtns from './components/IncrementScoreBtns';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const setScore = (team, increment) => {
    const val = team === 'home' ? homeScore : awayScore;
    const set = team === 'home' ? setHomeScore : setAwayScore;
    set(val + increment);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamScore team="Lions" isHome={true} score={homeScore} />
          <div className="timer">00:03</div>
          <TeamScore team="Tigers" isHome={false} score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <IncrementScoreBtns isHome={true} incrementScore={setScore} />
        <IncrementScoreBtns isHome={false} incrementScore={setScore} />
      </section>
    </div>
  );
}

export default App;
