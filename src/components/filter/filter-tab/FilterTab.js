import styles from './filter-tab.module.scss'

const FilterTab = ({filter, selectedFilters, setSelectedFilters}) => {
  // проверяем есть ли категория в массиве
  const selectedFilterNews = () => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(elem => elem !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  return (
    <>
      <li
        className={`${styles.tab} ${
          selectedFilters.includes(filter) ? styles.active : ''
        }`}
        onClick={selectedFilterNews}
      >
        {filter}
      </li>
    </>
  )
}

export default FilterTab
