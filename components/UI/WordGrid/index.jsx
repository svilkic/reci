import React from "react";
// Styles
import styles from "./grid.module.css";

export function WordGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.tiles}>
        {/* ---------------------------- */}
        <div className={styles.tile}>A</div>
        <div className={styles.tile}>L</div>
        <div className={styles.tile}>E</div>
        <div className={styles.tile}>K</div>
        <div className={styles.tile}>S</div>
        {/* ---------------------------- */}
        {/* ---------------------------- */}
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        {/* ---------------------------- */}
        {/* ---------------------------- */}
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        {/* ---------------------------- */}
        {/* ---------------------------- */}
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        {/* ---------------------------- */}
        {/* ---------------------------- */}
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        {/* ---------------------------- */}
        {/* ---------------------------- */}
        <div className={styles.tile}>a</div>
        <div className={styles.tile}>b</div>
        <div className={styles.tile}>c</div>
        <div className={styles.tile}>d</div>
        <div className={styles.tile}>e</div>
        {/* ---------------------------- */}
      </div>
    </div>
  );
}
