import {Button} from '@mui/material'
import styles from './filter-reset.module.scss'

const FilterReset = ({setCountPosts, setSelectedFilters}) => {
  const setReset = () => {
    setCountPosts(8)
    setSelectedFilters([])
  }

  return (
    <div className={styles.wrapper}>
      <Button className={`${styles.btn}`} onClick={setReset}>
        сбросить все фильтры
      </Button>
    </div>
  )
}

export default FilterReset
