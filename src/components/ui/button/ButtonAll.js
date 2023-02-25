import { Button } from '@mui/material'
import styles from './button-all.module.scss'

const ButtonAll = () => {
  return (
    <div className={styles.wrapper}>
      <Button variant="outlined" className={styles.btn}>Показать все</Button>
    </div>
  )
}

export default ButtonAll