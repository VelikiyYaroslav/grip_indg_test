import React from 'react';
import { useSelector } from 'react-redux';
import selectGameScore from '../../../Selectors/selectGameScore';
import selectGameCurrentPlayer from '../../../Selectors/selectGameCurrentPlayer';

export function Status() {
    const score = useSelector(selectGameScore);
    const playerNumber = useSelector(selectGameCurrentPlayer);

    return (
        <div>
            <div>
                {score.users.map((points, number) => (
                    <p key={number}>Player{number + 1}: {points}</p>
                ))}
            </div>
            <div>
                <p>Current player: {playerNumber + 1}</p>
            </div>
        </div>
    );
}
