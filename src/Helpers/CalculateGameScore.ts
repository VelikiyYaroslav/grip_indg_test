import { BoardState, BoardCellStatus, BOARD_CELL_STATUS_FREE, BoardCellCoords as CellCoords } from "../Store/Game/types";

type UserType = BoardCellStatus;

type Cell = {
    markedByUser: UserType,
    visited: boolean,
}

type Board = Array<Array<Cell>>;

export type GameScore = {
    users: number[][],
    free: number,
}

export function calculateGameScore(boardState: BoardState): GameScore {
    let board = transformBoardStateToSearchFormat(boardState);

    return BFS(board);
}

function transformBoardStateToSearchFormat(boardState: BoardState): Board {
    return boardState.map(row => {
        return row.map((col: UserType): Cell => {
            return {
                markedByUser: col,
                visited: false,
            }
        })
    });
}

/**
 * Breadth-first search
 * 
**/
function BFS(board: Board): GameScore {
    const score: GameScore = {
        users: [],
        free: 0,
    }

    const queue: CellCoords[] = [];

    // small optimization
    score.free = markAllFreeCellsAsVisited(board);

    // iterate by user's groups
    while (true) {
        const nextNotVisitedCell: CellCoords | null = getNextNotVisitedCell(board);
        if (!nextNotVisitedCell) {
            break;
        }

        const currentUser: UserType = getCellByCoords(board, nextNotVisitedCell).markedByUser;

        markCellAsVisited(board, nextNotVisitedCell);
        queue.push(nextNotVisitedCell);

        let currentUsersGroupSize = 0;
        // iterate in user's group
        while (queue.length) {
            const currentCellCoords: CellCoords = queue.pop() as CellCoords;
            currentUsersGroupSize++;

            const directlyConnectedByUser: CellCoords[] =
                getAllNotVisitedDirectlyConnectedByUser(board, currentCellCoords, currentUser);
            directlyConnectedByUser.forEach(cell => markCellAsVisited(board, cell));
            queue.push(...directlyConnectedByUser);
        }

        if (currentUser !== BOARD_CELL_STATUS_FREE) {
            if (!score.users[currentUser]) {
                score.users[currentUser] = [];
            }
            score.users[currentUser].push(currentUsersGroupSize);
        }


    }

    return score;

}

//some optimization
function markAllFreeCellsAsVisited(board: Board): number {
    let freeCells = 0;
    for (let row of board) {
        for (let cell of row) {
            if (cell.markedByUser === BOARD_CELL_STATUS_FREE) {
                cell.visited = true;
                freeCells++;
            }
        }
    }
    return freeCells;
}

function getNextNotVisitedCell(board: Board): CellCoords | null {
    for (const rowIndex in board) {
        const row = board[rowIndex];
        for (const colIndex in row) {
            const cell = row[colIndex];
            if (!cell.visited) {
                return {
                    col: Number(colIndex),
                    row: Number(rowIndex),
                }
            }
        }
    }
    return null;
}

function markCellAsVisited(board: Board, cellCoords: CellCoords): void {
    getCellByCoords(board, cellCoords).visited = true;
}

function getCellByCoords(board: Board, cellCoords: CellCoords): Cell {
    return board[cellCoords.row][cellCoords.col];
}

function getAllNotVisitedDirectlyConnectedByUser(board: Board, cell: CellCoords, currentUser: UserType): CellCoords[] {
    const top: CellCoords = { col: cell.col, row: cell.row - 1 };
    const down: CellCoords = { col: cell.col, row: cell.row + 1 };
    const left: CellCoords = { col: cell.col - 1, row: cell.row };
    const right: CellCoords = { col: cell.col + 1, row: cell.row };

    return [top, down, left, right].filter(currentCell => (
        isCellByCoordsExists(currentCell, board)
        && isCellNotVisited(currentCell, board)
        && isCellMarkedByCurrentUser(currentCell, board, currentUser)
    ));
}

function isCellByCoordsExists(cell: CellCoords, board: Board): boolean {
    return cell.col >= 0 && cell.row >= 0
        && cell.row < board.length
        && cell.col < board[cell.row].length;
}

function isCellMarkedByCurrentUser(cell: CellCoords, board: Board, currentUser: UserType): boolean {
    return getCellByCoords(board, cell).markedByUser === currentUser;
}

function isCellNotVisited(cell: CellCoords, board: Board): boolean {
    return !getCellByCoords(board, cell).visited;
}

