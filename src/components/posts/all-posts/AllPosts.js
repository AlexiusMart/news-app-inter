import {getAllData} from '@/services/fetchData'
import {useEffect, useState} from 'react'
import PreviewPost from '../preview-post/PreviewPost'

import styles from './all-posts.module.scss'

const AllPosts = ({showAll}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllData().then(res => setPosts(res))
  }, [])

  const getMainListNews = res => {
    return showAll ? res : res.slice(0, 8)
  }

  return (
    <>
      <div className={styles.wrapper}>
        {posts &&
          getMainListNews(posts).map(post => (
            <PreviewPost key={post.id} post={post} />
          ))}
      </div>
    </>
  )
}

export default AllPosts
