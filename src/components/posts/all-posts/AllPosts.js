import {getAllData} from '@/services/fetchData'
import {useEffect, useState} from 'react'
import PreviewPost from '../preview-post/PreviewPost'

import styles from './all-posts.module.scss'

const AllPosts = ({countPosts, posts, setPosts}) => {
  useEffect(() => {
    getAllData().then(res => setPosts(res))
  }, [])

  const getMainListNews = res => {
    return res.slice(0, countPosts)
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
