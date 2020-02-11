import React from 'react';
import { useSelector } from 'react-redux';
import selectGameCurrentPlayer from '../../../Selectors/selectGameCurrentPlayer';
import styles from "./CurrentPlayer.module.scss"

export function CurrentPlayer() {
    const playerNumber = useSelector(selectGameCurrentPlayer);

    return (
        <div>
            <p className={styles[`current-player-${playerNumber + 1}`]}>Current player: {playerNumber + 1}</p>
        </div>
    );
}
