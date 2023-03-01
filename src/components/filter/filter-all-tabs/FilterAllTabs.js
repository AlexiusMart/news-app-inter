import {getAllData} from '@/services/fetchData'
import {useEffect, useMemo, useState} from 'react'
import FilterReset from '../filter-reset/FilterReset'
import FilterTab from '../filter-tab/FilterTab'

import styles from './filter-all-tabs.module.scss'

const FilterAllTabs = ({selectedFilters, setSelectedFilters}) => {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getAllData().then(res => setFilters(res))
  }, [])

  // объединение значений фильтров
  function mergeFiltersValue(data, propName) {
    let result = {}
    data.forEach(item => {
      if (!result[item[propName]]) {
        result[item[propName]] = item
      } else {
        Object.assign(result[item[propName]], item)
      }
    })
    console.log(Object.values(result))
    return Object.values(result)
  }

  const mergeFilter = mergeFiltersValue(filters, 'application')

  // сортировка элементов по кол-ву
  const mergeFilterSorted = useMemo(() => {
    return mergeFilter.sort((a, b) => {
      const countA = mergeFilter.filter(
        filter => filter.application === a.application
      ).length
      const countB = mergeFilter.filter(
        filter => filter.application === b.application
      ).length
  
      return countB - countA
    })
  }, [mergeFilter])

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.tabs}>
          {mergeFilterSorted.map(filter => (
            <FilterTab
              key={filter.id}
              {...filter}
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
            />
          ))}
        </ul>
      </div>
      <div className={styles.reset}>
        <FilterReset setSelectedFilters={setSelectedFilters} />
      </div>
    </div>
  )
}

export default FilterAllTabs
