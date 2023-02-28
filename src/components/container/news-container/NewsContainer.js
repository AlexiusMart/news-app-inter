import {ButtonAll, ButtonCol} from '@/components/ui/button/ButtonAll'
import {useMediaQuery} from '@mui/material'
import {useState} from 'react'
import FilterAllTabs from '../../filter/filter-all-tabs/FilterAllTabs'
import Heading from '../../heading/Heading'
import AllPosts from '../../posts/all-posts/AllPosts'

import styles from './news-container.module.scss'

const NewsContainer = () => {
  const [posts, setPosts] = useState([])
  const [countPosts, setCountPosts] = useState(8)

  const mobile = useMediaQuery('(max-width:768px)')

  return (
    <div className={styles.wrapper}>
      <Heading countPosts={countPosts} />
      <FilterAllTabs />
      <AllPosts posts={posts} setPosts={setPosts} countPosts={countPosts} />

      {countPosts >= posts.length ? (
        <ButtonCol setCountPosts={setCountPosts} />
      ) : (
        <ButtonAll
          mobile={mobile}
          setCountPosts={setCountPosts}
          posts={posts}
        />
      )}
    </div>
  )
}

export default NewsContainer
