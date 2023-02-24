
import Button from '@mui/material/Button'

import styles from './filter-tab.module.scss'

const FilterTab = () => {
  return (
    <>
      <Button variant='outlined' className={`${styles.btn}`}>
        РИТЕЙЛ
      </Button>
        <Button variant='contained' className={`${styles.btn} ${styles.btnActive}`}>
          ПРОМЫШЛЕННОСТЬ
        </Button>
    </>
  )
}

export default FilterTab
