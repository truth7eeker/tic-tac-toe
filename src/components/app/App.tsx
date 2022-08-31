import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restart } from '../../store/reducers/gameSlice'
import Grid from '../grid/Grid'
import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const {winner} = useSelector((state:any) => state.game)

  const handleRestart = () => {
    dispatch(restart())
  }
  
  return (
    <div className={styles.wrapper}>
      <Grid />
      <div className={styles.results} style={{display: winner ? 'flex' : 'none'}}>
        <div className={styles.winner}>Winner: {winner}</div>
        <button className={styles.restart__btn} onClick={handleRestart}>Play Again</button>
      </div>
    </div>
  )
}

export default App