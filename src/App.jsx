import React from "react";
import { languages } from "./languages";

export default function AssemblyEndgame() {
  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return <span style={styles}>{lang.name}</span>;
  });
  return (
    <main>
      <header>
        <h1>Asssembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
    </main>
  );
}
