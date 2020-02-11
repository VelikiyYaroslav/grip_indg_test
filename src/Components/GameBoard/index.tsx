import React from "react";
import { Board } from "./Board";
import { CurrentPlayer } from "./Status/CurrentPlayer";
import { Score } from "./Status/Score";
import styles from "./index.module.scss";


export function GameBoard() {
    return (
        <div className={styles.GameBoard}>
            <div className={styles.CurrentPlayer}>
                <CurrentPlayer />
            </div>
            <div className={styles.Score}>
                <Score />
            </div>
            <div className={styles.Board}>
                <Board />
            </div>
        </div>
    )
}
