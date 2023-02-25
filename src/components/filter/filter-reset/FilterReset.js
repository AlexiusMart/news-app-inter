import {Button} from '@mui/material'
import styles from './filter-reset.module.scss'

const FilterReset = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={`${styles.btn}`}>сбросить все фильтры</Button>
    </div>
  )
}

export default FilterReset
