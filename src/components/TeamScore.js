import React from 'react';

function TeamScore(props) {
    const { team, isHome, score } = props;

    const classPrefix = isHome ? 'home' : 'away';

    return (
        <div className={classPrefix}>
            <h2 className={classPrefix + '__name'}>{team}</h2>
            <div className={classPrefix + '__score'}>{score}</div>
        </div>
    );
}

export default TeamScore;