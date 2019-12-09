//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TeamScore from './components/TeamScore';

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
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setScore('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setScore('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setScore('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setScore('away', 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
