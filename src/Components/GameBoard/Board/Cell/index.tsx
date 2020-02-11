import React, { useCallback } from 'react';
import { BoardCellStatus, BOARD_CELL_STATUS_FREE } from "../../../../Store/Game/types";
import styles from "./index.module.scss";

type props = {
    cellFill: BoardCellStatus,
    onUserSelect: () => void,
}

export function Cell({ cellFill, onUserSelect }: props) {

    const onCellClick = useCallback((event) => {
        event.preventDefault();
        if (cellFill === BOARD_CELL_STATUS_FREE) {
            onUserSelect();
        }
    }, [cellFill, onUserSelect])

    // Maybe it should be button(specially styled) for more accessibility; 
    return <div
        className={[styles.Cell, getCellStyle(cellFill)].join(" ")}
        onClick={onCellClick}
        tabIndex={0}
        // TODO: mb add some aria labels
    />
}

function getCellStyle(cellFill: BoardCellStatus): string {
    switch (cellFill) {
        case BOARD_CELL_STATUS_FREE:
            return styles["Cell-free"];
        case 0:
            return styles["Cell-user1"];
        case 1:
            return styles["Cell-user2"];
        default:
            return "";
    }
}
