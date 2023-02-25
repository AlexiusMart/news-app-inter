import FilterAllTabs from '../filter/filter-all-tabs/FilterAllTabs'
import Heading from '../heading/Heading'
import Post from '../posts/preview-post/Post'

import styles from './news-container.module.scss'

const NewsContainer = () => {
  return (
    <>
      <Heading />
      <FilterAllTabs />
      <Post />
    </>
  )
}

export default NewsContainer
