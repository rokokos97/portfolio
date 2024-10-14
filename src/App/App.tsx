import styles from './App.module.scss'
import cv from '../pages/cv/Cv'

function App() {
  return (
    <article className={styles.article}>
      {cv()}
    </article>
  )
}

export default App