import styles from './filter-tab.module.scss'

const FilterTab = ({application}) => {
  return (
    <>
      <li className={`${styles.tab}`}>{application}</li>
    </>
  )
}

export default FilterTab
