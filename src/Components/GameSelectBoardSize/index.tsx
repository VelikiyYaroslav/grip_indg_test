import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { MIN_BOARD_SIZE, MAX_BOARD_SIZE } from "../../Store/Game/types";
import { selectBoardSize } from "../../Store/Game/actions";
import styles from "./index.module.scss";

export function GameSelectBoardSize() {

    const [size, setSize] = useState(MIN_BOARD_SIZE)
    const onChangeSize = useCallback((event) => setSize(Number(event.target.value)), [setSize]);

    const dispatch = useDispatch();
    const onSelectBoardSize = useCallback(
        () => dispatch(selectBoardSize(size)),
        [dispatch, size]
    );
    return (
        <form onSubmit={onSelectBoardSize}>
            <div>
                <label>
                    <p>Select game-board size: </p>
                    <input
                        type="number"
                        min={MIN_BOARD_SIZE}
                        max={MAX_BOARD_SIZE}
                        value={size}
                        onChange={onChangeSize}
                        autoFocus
                        className={styles.BoardSizeInput}
                    />
                </label>
            </div>
            <button type="submit" className={styles.StartGame}>Start game!</button>
        </form>
    )
}
