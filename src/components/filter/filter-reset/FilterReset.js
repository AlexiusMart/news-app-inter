import {Button} from '@mui/material'
import styles from './filter-reset.module.scss'

const FilterReset = ({setSelectedFilters}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        className={`${styles.btn}`}
        onClick={() => setSelectedFilters([])}
      >
        сбросить все фильтры
      </Button>
    </div>
  )
}

export default FilterReset
