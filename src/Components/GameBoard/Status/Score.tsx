import React from "react";
import { useSelector } from "react-redux";
import selectGameScore from "../../../Selectors/selectGameScore";
import { getUserPointsFromGameScore } from "../../../Helpers/GetUserPointsFromGameScore";
import selectGamePlayersCount from "../../../Selectors/selectGamePlayersCount";

export function Score() {
    const score = useSelector(selectGameScore);
    const playersCount = useSelector(selectGamePlayersCount);

    const additionalFillCount = (score.users.length <= playersCount)
        ? playersCount - score.users.length
        : 0;
    const users = [
        ...score.users,
        ...(Array(additionalFillCount).fill(0))
    ];

    return (
        <div>
            {users.map((_, userNumber) => (
                <p key={userNumber}>Player{userNumber + 1}: {getUserPointsFromGameScore(score, userNumber)}</p>
            ))}
        </div>
    );
}
