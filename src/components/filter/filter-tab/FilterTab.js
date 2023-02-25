import styles from './filter-tab.module.scss'

const FilterTab = () => {
  return (
    <>
      <li className={`${styles.tab}`}>РИТЕЙЛ</li>
      <li className={`${styles.tab} ${styles.active}`}>ПРОМЫШЛЕННОСТЬ</li>
    </>
  )
}

export default FilterTab
