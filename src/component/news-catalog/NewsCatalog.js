import FilterTabs from '../filter/filter-all-tabs/FilterAllTabs'
import Post from '../posts/preview-post/Post'

import styles from './news-catalog.module.scss'

const NewsCatalog = () => {
  return (
    <>
      <h1 className={styles.h1}>
        Заголовок <span className={styles.span}>(232)</span>
      </h1>
      <FilterTabs />
      <Post />
    </>
  )
}

export default NewsCatalog
