import React from "react";
import { useSelector } from "react-redux";
import selectGameStatus from "../../Selectors/selectGameStatus";
import { GAME_STATUS_SELECT_BOARD_SIZE, GAME_STATUS_IN_GAME, GAME_STATUS_FINISH } from "../../Store/Game/types";

export function Game() {
    const gameStatus = useSelector(selectGameStatus);

    switch (gameStatus) {
        case GAME_STATUS_SELECT_BOARD_SIZE:
            return (<div>{GAME_STATUS_SELECT_BOARD_SIZE}</div>); //TODO
        case GAME_STATUS_IN_GAME:
            return (<div>{GAME_STATUS_IN_GAME}</div>); //TODO
        case GAME_STATUS_FINISH:
            return (<div>{GAME_STATUS_FINISH}</div>); //TODO
        default:
            // Some error here;
            return (<div>WOOPS!</div>);
    }
}