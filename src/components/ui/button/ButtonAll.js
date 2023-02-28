import {Button} from '@mui/material'
import styles from './button-all.module.scss'

const ButtonAll = ({mobile, setCountPosts, posts}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        variant='outlined'
        className={styles.btn}
        onClick={() =>
          !mobile
            ? setCountPosts(posts.length)
            : setCountPosts(prevCount => prevCount + 8)
        }
      >
        {!mobile ? 'Показать все' : 'Показать еще'}
      </Button>
    </div>
  )
}

const ButtonCol = ({setCountPosts}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        variant='outlined'
        className={styles.btn}
        onClick={() => setCountPosts(8)}
      >
        Свернуть все
      </Button>
    </div>
  )
}

export {ButtonAll, ButtonCol}
