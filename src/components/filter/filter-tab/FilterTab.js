import styles from './filter-tab.module.scss'

const FilterTab = ({application, selectedFilters, setSelectedFilters}) => {
  // проверяем есть ли категория в массиве
  const selectedFilterNews = () => {
    if (selectedFilters.includes(application)) {
      setSelectedFilters(selectedFilters.filter(elem => elem !== application))
    } else {
      setSelectedFilters([...selectedFilters, application])
    }
  }

  return (
    <>
      <li
        className={`${styles.tab} ${
          selectedFilters.includes(application) ? styles.active : ''
        }`}
        onClick={() => selectedFilterNews()}
      >
        {application}
      </li>
    </>
  )
}

export default FilterTab
