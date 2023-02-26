import {getAllData} from '@/services/fetchData'
import {useEffect, useState} from 'react'
import PreviewPost from '../preview-post/PreviewPost'

import styles from './all-posts.module.scss'

const AllPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllData().then(res => setPosts(getMainListNews(res)))
  }, [])

  const getMainListNews = res => {
    return res.slice(0, 8)
  }

  return (
    <>
      <div className={styles.wrapper}>
        {posts && posts.map(post => <PreviewPost key={post.id} {...post} />)}
      </div>
    </>
  )
}

export default AllPosts
