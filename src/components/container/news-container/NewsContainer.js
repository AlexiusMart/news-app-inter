import {ButtonAll, ButtonCol} from '@/components/ui/button/ButtonAll'
import {useState} from 'react'
import FilterAllTabs from '../../filter/filter-all-tabs/FilterAllTabs'
import Heading from '../../heading/Heading'
import AllPosts from '../../posts/all-posts/AllPosts'

import styles from './news-container.module.scss'

const NewsContainer = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Heading />
      <FilterAllTabs />
      <AllPosts showAll={showAll} />
      {showAll ? (
        <ButtonCol setShowAll={setShowAll} />
      ) : (
        <ButtonAll setShowAll={setShowAll} />
      )}
    </div>
  )
}

export default NewsContainer
