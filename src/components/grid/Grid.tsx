import React, { useState } from 'react'
import Square from '../individual-square/Square'
import styles from './Grid.module.scss'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'

function Grid() {
  const { squares } = useSelector((state:any) => state.game)
  
  return (
    <div className={styles.grid}>
      {squares.map((el:string, id:number) => <Square 
          key={nanoid()} 
          num={id}
          value={el}
          />
        )}
    </div>
  )
}

export default Grid