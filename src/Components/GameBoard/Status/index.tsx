import React from 'react';
import { useSelector } from 'react-redux';
import selectGameScore from '../../../Selectors/selectGameScore';
import selectGameCurrentPlayer from '../../../Selectors/selectGameCurrentPlayer';
import { getUserPointsFromGameScore } from '../../../Helpers/GetUserPointsFromGameScore';

export function Status() {
    const score = useSelector(selectGameScore);
    const playerNumber = useSelector(selectGameCurrentPlayer);

    return (
        <div>
            <div>
                {score.users.map((_, userNumber) => (
                    <p key={userNumber}>Player{userNumber + 1}: {getUserPointsFromGameScore(score, userNumber)}</p>
                ))}
            </div>
            <div>
                <p>Current player: {playerNumber + 1}</p>
            </div>
        </div>
    );
}
