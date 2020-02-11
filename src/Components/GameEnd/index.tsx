import React from "react";
import { useSelector } from "react-redux";
import selectGameScore from "../../Selectors/selectGameScore";
import { findWinner, DRAW_BY_POINTS } from "../../Helpers/FindWinner";

export function GameEnd() {

    const score = useSelector(selectGameScore);
    const winner = findWinner(score);

    return (
        <div>
            {winner === DRAW_BY_POINTS
                ? (
                    <h2>Draw!</h2>
                )
                : (
                    <h2>Player {winner + 1} wins!</h2>
                )
            }
        </div>
    )
}
