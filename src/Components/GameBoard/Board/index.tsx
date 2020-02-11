import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./index.module.scss";
import { playerSelectCell } from "../../../Store/Game/actions";
import { BoardCellCoords } from "../../../Store/Game/types";
import selectGameBoard from "../../../Selectors/selectGameBoard";
import selectGameBoardSize from "../../../Selectors/selectGameBoardSize";
import { Cell } from './Cell';

export function Board() {
    const board = useSelector(selectGameBoard);
    const boardSize = useSelector(selectGameBoardSize);

    const dispatch = useDispatch();

    const onUserSelectCell = useCallback((cellCoords: BoardCellCoords) => {
        dispatch(playerSelectCell(cellCoords));
    }, [dispatch]);

    return (
        <div
            className={styles.Board}
            style={{
                gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                gridTemplateRows: `repeat(${boardSize}, 1fr)`,
            }}
        >
            {board.map((row, rowIndex) => {
                return row.map((cell, cellIndex) => (
                    <Cell
                        key={`${rowIndex}-${cellIndex}`}
                        cellFill={cell}
                        onUserSelect={() => { onUserSelectCell({ row: rowIndex, col: cellIndex }) }}
                    />
                ))
            })}
        </div>
    )
}