import { WordGrid } from "../components/UI/WordGrid";
import { Keyboard } from "../components/UI/Keyboard";

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <WordGrid />
      <Keyboard />
    </div>
  );
}
