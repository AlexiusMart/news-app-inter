import Button from '@mui/material/Button'

import styles from './filter-tab.module.scss'

const FilterTab = () => {
  return (
    <>
      <Button className={`${styles.btn}`}>РИТЕЙЛ</Button>
      <Button className={`${styles.btn} ${styles.active}`}>
        ПРОМЫШЛЕННОСТЬ
      </Button>
      <Button className={`${styles.btn}`}>
        РИТ
      </Button>
        <Button className={`${styles.btn} ${styles.active}`}>
          ПРОМЫШЛЕННОСТЬ
        </Button>
    </>
  )
}

export default FilterTab
