import React, { useState } from 'react'
import styles from './Square.module.scss'
import { setValue } from '../../store/reducers/gameSlice'
import { useDispatch } from 'react-redux'

interface IProps {
   num: number
   value: string
}

function Square({num, value}: IProps) {
  const dispatch = useDispatch()

  const handleClick = (num:number) => {
    dispatch(setValue(num))
  }

  return (
    <div className={styles.square} onClick={() => handleClick(num)} >
      {value}
    </div>
  )
}

export default Square