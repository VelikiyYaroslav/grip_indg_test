import React from "react";
import styles from "./App.module.scss";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Game } from "./Components/Game";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
