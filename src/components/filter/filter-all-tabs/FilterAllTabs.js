import FilterReset from '../filter-reset/FilterReset'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterAllTabs = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.tabs}>
          <FilterTab />
          <FilterTab />
          <FilterTab />
          <FilterTab />
          <FilterTab />
          <FilterTab />
          <FilterTab />
          <FilterTab />
        </ul>
      </div>
      <div className={styles.reset}>
        <FilterReset />
      </div>
    </div>
  )
}

export default FilterAllTabs
