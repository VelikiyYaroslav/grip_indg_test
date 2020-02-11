import {
    GameState,
    PLAYER_SELECT_CELL,
    SELECT_BOARD_SIZE,
    GameActionTypes,
    SelectBoardSizeAction,
    PlayerSelectCell,
    GAME_STATUS_SELECT_BOARD_SIZE,
    GAME_STATUS_IN_GAME,
    GAME_STATUS_FINISH,
    BOARD_CELL_STATUS_FREE,
    BoardState,
    BoardCellCoords,
    MAX_USERS,
    GameStatus,
    MIN_BOARD_SIZE,
    MAX_BOARD_SIZE,
} from "./types";

const initialState: GameState = {
    gameStatus: GAME_STATUS_SELECT_BOARD_SIZE,
    boardState: createInitialBoardState(MIN_BOARD_SIZE),
    currentUser: 0,
}

export function GameReducer(state = initialState, action: GameActionTypes): GameState {
    switch (action.type) {
        case SELECT_BOARD_SIZE:
            return selectBoardSize(state, action);
        case PLAYER_SELECT_CELL:
            return playerSelectCell(state, action);
        default:
            return state;
    }
}

function selectBoardSize(state: GameState, action: SelectBoardSizeAction): GameState {
    if (state.gameStatus !== GAME_STATUS_SELECT_BOARD_SIZE) {
        return state;
    }

    const { payload: { size } } = action;

    if (!isBoardSizeAvailable(size)) {
        return state;
    }


    return {
        ...state,
        boardState: createInitialBoardState(size),
        gameStatus: GAME_STATUS_IN_GAME, // set next game status;
    };
}

function isBoardSizeAvailable(size: number): boolean {
    return size >= MIN_BOARD_SIZE && size <= MAX_BOARD_SIZE;
}

function createInitialBoardState(boardSize: number): BoardState {
    return Array(boardSize).fill(
        Array(boardSize).fill(BOARD_CELL_STATUS_FREE)
    );
}

function playerSelectCell(state: GameState, action: PlayerSelectCell): GameState {
    if (state.gameStatus !== GAME_STATUS_IN_GAME) {
        return state;
    }

    const { payload: { cell } } = action;
    const { boardState: board } = state;

    if (!isCellIsOnBoard(cell, board)) {
        return state;
    }

    if (!isCellFree(cell, board)) {
        return state;
    }

    const nextBoardState = getNextBoardState(state.boardState, cell, state.currentUser);

    return {
        ...state,
        currentUser: getNextUser(state.currentUser),
        boardState: nextBoardState,
        gameStatus: getNextGameStatusOnPlayerSelectCell(nextBoardState),
    }


}

function isCellIsOnBoard(cell: BoardCellCoords, board: BoardState): boolean {
    return cell.col >= 0 && cell.row >= 0
        && cell.row < board.length
        && cell.col < board[cell.row].length;
}

function isCellFree(cell: BoardCellCoords, board: BoardState): boolean {
    return board[cell.row][cell.col] === BOARD_CELL_STATUS_FREE;
}

function getNextUser(currentUser: number) {
    return (currentUser + 1) % MAX_USERS;
}

function getNextBoardState(boardState: BoardState, cell: BoardCellCoords, user: number): BoardState {

    let nextState = [...boardState];

    let nextRow = [...boardState[cell.row]];
    nextRow[cell.col] = user;

    nextState[cell.row] = nextRow;

    return nextState;
}

function getNextGameStatusOnPlayerSelectCell(newBoard: BoardState): GameStatus {
    const isFreeCellsOnBoard = newBoard.reduce((reducer, row) => {
        const isFreeCellsOnRow = row.reduce(
            (rowReducer, cell) => rowReducer || (cell === BOARD_CELL_STATUS_FREE),
            false
        );
        return reducer || isFreeCellsOnRow;
    }, false);

    return isFreeCellsOnBoard
        ? GAME_STATUS_IN_GAME
        : GAME_STATUS_FINISH;
}

