import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { MIN_BOARD_SIZE, MAX_BOARD_SIZE } from "../../Store/Game/types";
import { selectBoardSize } from "../../Store/Game/actions";

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
                    <input
                        type="number"
                        min={MIN_BOARD_SIZE}
                        max={MAX_BOARD_SIZE}
                        value={size}
                        onChange={onChangeSize}
                    />
                    <span>Select game-board size (2..8).</span>
                </label>
            </div>
            <button type="submit">GO!</button>
        </form>
    )
}
