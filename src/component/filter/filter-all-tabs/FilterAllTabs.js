import Stack from '@mui/material/Stack'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterTabs = () => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        <FilterTab />
      </Stack>
    </>
  )
}

export default FilterTabs
