import PreviewPost from '../preview-post/PreviewPost'

import styles from './all-posts.module.scss'

const AllPosts = () => {
  return (
    <>
      <div className={styles.wrapper}>
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
        </div>
    </>
  )
}

export default AllPosts
