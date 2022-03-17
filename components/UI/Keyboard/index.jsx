import React, { useEffect, useState } from "react";
// Icons
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEnter} from 'react-icons/ai'
// Styles
import styles from "./keyboard.module.css";

export function Keyboard() {

  const [playing,setPlaying] = useState(true);

  const onClickHandler = (e) => {
    if(e.target.matches('[data-key]')){
      console.log(e.target.dataset.key)
    }
    if(e.target.matches('[data-delete]')){
      console.log("Remove character")
    }
    if(e.target.matches('[data-enter]')){
      console.log("Submit word")
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', e => {
      keyPressHandler(e)
    });
  }, []);

  const keyPressHandler = (e) => {
    const {key} = e;
    if(key === "Enter"){

    }
    else if(key === "Backspace" || key === "Delete"){
    }
    else if (key.match(/^[a-z]$/)){
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.row} onKeyDown={keyPressHandler}>
        <button className={`${styles.key}`} data-key='Q' onClick={onClickHandler}> Q </button>
        <button className={`${styles.key} `} data-key='W' onClick={onClickHandler}> W </button>
        <button className={`${styles.key} `} data-key='E' onClick={onClickHandler}> E </button>
        <button className={styles.key} data-key='R' onClick={onClickHandler}> R </button>
        <button className={styles.key} data-key='T' onClick={onClickHandler}> T </button>
        <button className={styles.key} data-key='Y' onClick={onClickHandler}> Y </button>
        <button className={styles.key} data-key='U' onClick={onClickHandler}> U </button>
        <button className={styles.key} data-key='I' onClick={onClickHandler}> I </button>
        <button className={styles.key} data-key='O' onClick={onClickHandler}> O </button>
        <button className={styles.key} data-key='P' onClick={onClickHandler}> P </button>
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
        <button className={`${styles.key} ${styles.outline}`} data-key='delete' title="delete"> <FiDelete size="1.2em"/></button>
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
