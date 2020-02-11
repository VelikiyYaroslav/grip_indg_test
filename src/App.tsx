import React from 'react';
import styles from "./App.module.scss";
import { Game } from './Components/Game';

const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <h1>
          You play in test game!
        </h1>
      </header>
      <main className={styles.main}>
        <Game />
      </main>
      <footer>
        some game tips
      </footer>
    </div>
  );
}

export default App;
