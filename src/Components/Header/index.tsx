import React from "react";
import styles from "./index.module.scss";

export function Header() {
    return (
        <header className={styles.Header}>
            <h1>You play in SQUARES game!</h1>
        </header>
    );
}