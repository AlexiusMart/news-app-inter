import PreviewPost from '../preview-post/PreviewPost'

import styles from './all-posts.module.scss'

const AllPosts = ({posts, getMainListNews}) => {
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
