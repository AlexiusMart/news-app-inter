import ButtonAll from '@/components/ui/button/ButtonAll'
import FilterAllTabs from '../../filter/filter-all-tabs/FilterAllTabs'
import Heading from '../../heading/Heading'
import AllPosts from '../../posts/all-posts/AllPosts'

import styles from './news-container.module.scss'

const NewsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Heading />
      <FilterAllTabs />
      <AllPosts />
      <ButtonAll />
    </div>
  )
}

export default NewsContainer
