import React from "react"
import styles from "./index.module.scss";

export function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.FooterRules}>Game rules:</p>
            <ul className={styles.FooterRulesList}>
                <li>Each player marks a square on their turn.</li>
                <li>The player with the biggest directly connecting squares group wins.</li>
            </ul>
        </footer>
    )
}