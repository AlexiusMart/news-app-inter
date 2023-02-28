import {Button} from '@mui/material'
import styles from './button-all.module.scss'

const ButtonAll = ({setShowAll}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        variant='outlined'
        className={styles.btn}
        onClick={() => setShowAll(true)}
      >
        Показать все
      </Button>
    </div>
  )
}

const ButtonCol = ({setShowAll}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        variant='outlined'
        className={styles.btn}
        onClick={() => setShowAll(false)}
      >
        Свернуть все
      </Button>
    </div>
  )
}

export {ButtonAll, ButtonCol}
