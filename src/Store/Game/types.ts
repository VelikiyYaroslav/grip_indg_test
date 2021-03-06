export const BOARD_CELL_STATUS_FREE = "free";
export type BoardCellStatus = typeof BOARD_CELL_STATUS_FREE | number;
export const MAX_USERS = 2;


export const MIN_BOARD_SIZE = 2;
export const MAX_BOARD_SIZE = 8;
export type BoardState = Array<Array<BoardCellStatus>>;

export const GAME_STATUS_SELECT_BOARD_SIZE = "GameStatus_SelectBoardSize";
export const GAME_STATUS_IN_GAME = "GameStatus_InGame";
export const GAME_STATUS_FINISH = "GameStatus_GameFinish";

export type GameStatus = typeof GAME_STATUS_SELECT_BOARD_SIZE
    | typeof GAME_STATUS_IN_GAME
    | typeof GAME_STATUS_FINISH
    ;

export type CurrentUser = number;

export interface GameState {
    gameStatus: GameStatus,
    boardState: BoardState,
    currentUser: CurrentUser,
};

export const SELECT_BOARD_SIZE = "SELECT_BOARD_SIZE";
export const PLAYER_SELECT_CELL = "PLAYER_SELECT_CELL";

export interface BoardCellCoords {
    row: number,
    col: number,
};

export interface SelectBoardSizeAction {
    type: typeof SELECT_BOARD_SIZE,
    payload: {
        size: number,
    },
};

export interface PlayerSelectCell {
    type: typeof PLAYER_SELECT_CELL,
    payload: {
        cell: BoardCellCoords,
    },
};

export type GameActionTypes = SelectBoardSizeAction | PlayerSelectCell;
