import {getAllData} from '@/services/fetchData'
import {useEffect, useState} from 'react'
import FilterReset from '../filter-reset/FilterReset'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterAllTabs = () => {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getAllData().then(res => setFilters(res))
  }, [])

  function mergeFiltersValue(data, propName) {
    let result = {}
    data.forEach(item => {
      if (!result[item[propName]]) {
        result[item[propName]] = item
      } else {
        Object.assign(result[item[propName]], item)
      }
    })
    return Object.values(result)
  }

  const mergeFilter = mergeFiltersValue(filters, 'application')

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.tabs}>
          {mergeFilter.map(filter => (
            <FilterTab key={filter.id} {...filter} />
          ))}
        </ul>
      </div>
      <div className={styles.reset}>
        <FilterReset />
      </div>
    </div>
  )
}

export default FilterAllTabs
