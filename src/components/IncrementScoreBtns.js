import React from 'react';

function IncrementScoreBtns(props) {
    const { isHome, incrementScore } = props;

    const teamSide = isHome ? 'home' : 'away';
    const teamSidePascal = isHome ? 'Home' : 'Away';

    return (
        <div className={`${teamSide}Buttons`}>
            <button className={`${teamSide}Buttons__touchdown`} onClick={() => incrementScore(teamSide, 7)}>{teamSidePascal} Touchdown</button>
            <button className={`${teamSide}Buttons__fieldGoal`} onClick={() => incrementScore(teamSide, 3)}>{teamSidePascal} Field Goal</button>
        </div>
    );
}

export default IncrementScoreBtns;