import Stack from '@mui/material/Stack'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterAllTabs = () => {
  return (
    <>
      <Stack spacing={2} direction='row' className={styles.filters}>
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
        <FilterTab />
      </Stack>
    </>
  )
}

export default FilterAllTabs
