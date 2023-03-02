import {getAllData} from '@/services/fetchData'
import {useEffect, useMemo, useState} from 'react'
import FilterReset from '../filter-reset/FilterReset'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterAllTabs = ({
  setCountPosts,
  selectedFilters,
  setSelectedFilters
}) => {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getAllData().then(res => setFilters(res))
  }, [])

  // объединение и сортировка категорий
  function mergeFiltersValue(data, propName) {
    let result = {}

    data.forEach(item => {
      if (!result[item[propName]]) {
        result[item[propName]] = [item]
      } else {
        result[item[propName]].push(item)
      }
    })
    let sortCategory = Object.entries(result).map((arr, i) => {
      return [arr[0], arr[1].length]
    })

    sortCategory.sort((a, b) => {
      return b[1] - a[1]
    })

    return sortCategory
  }

  const mergeFilter = mergeFiltersValue(filters, 'application')

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.tabs}>
          {mergeFilter.map(([filter]) => (
            <FilterTab
              key={filter}
              filter={filter}
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
            />
          ))}
        </ul>
      </div>
      <div className={styles.reset}>
        <FilterReset
          setCountPosts={setCountPosts}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </div>
  )
}

export default FilterAllTabs
