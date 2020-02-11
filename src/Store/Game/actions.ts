import { PLAYER_SELECT_CELL, SELECT_BOARD_SIZE, GameActionTypes, BoardCellCoords } from "./types";

export function selectBoardSize(size: number): GameActionTypes {
    return {
        type: SELECT_BOARD_SIZE,
        payload: { size },
    }
}

export function playerSelectCell(cell: BoardCellCoords): GameActionTypes {
    return {
        type: PLAYER_SELECT_CELL,
        payload: { cell },
    };
}
