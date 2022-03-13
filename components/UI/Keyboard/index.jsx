import React from "react";
// Icons
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEnter} from 'react-icons/ai'
// Styles
import styles from "./keyboard.module.css";

export function Keyboard() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button className={`${styles.key} ${styles.wrong}`} data-key='Q'> Q </button>
        <button className={`${styles.key} ${styles.wrongLocation}`} data-key='W'> W </button>
        <button className={`${styles.key} ${styles.correct}`} data-key='E'> E </button>
        <button className={styles.key} data-key='R'> R </button>
        <button className={styles.key} data-key='T'> T </button>
        <button className={styles.key} data-key='Y'> Y </button>
        <button className={styles.key} data-key='U'> U </button>
        <button className={styles.key} data-key='I'> I </button>
        <button className={styles.key} data-key='O'> O </button>
        <button className={styles.key} data-key='P'> P </button>
      </div>
      <div className={styles.row}>
        <button className={styles.key} data-key='A'> A </button>
        <button className={styles.key} data-key='S'> S </button>
        <button className={styles.key} data-key='D'> D </button>
        <button className={styles.key} data-key='F'> F </button>
        <button className={styles.key} data-key='G'> G </button>
        <button className={styles.key} data-key='H'> H </button>
        <button className={styles.key} data-key='J'> J </button>
        <button className={styles.key} data-key='K'> K </button>
        <button className={styles.key} data-key='L'> L </button>
        <button className={`${styles.key} ${styles.outline}`} data-key='<' title="enter"> <FiDelete size="1.2em"/></button>
      </div>
      <div className={styles.row}>
        <button className={styles.key} data-key='Z'> Z </button>
        <button className={styles.key} data-key='X'> X </button>
        <button className={styles.key} data-key='C'> C </button>
        <button className={styles.key} data-key='V'> V </button>
        <button className={styles.key} data-key='B'> B </button>
        <button className={styles.key} data-key='N'> N </button>
        <button className={styles.key} data-key='M'> M </button>
        <button className={`${styles.key} ${styles.outline}`} data-key='Enter' title="enter"> <AiOutlineEnter size="1.2em" /> </button>
      </div>
    </div>
  );
}
