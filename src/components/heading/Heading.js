import {Typography} from '@mui/material'

import styles from './heading.module.scss'

const Heading = ({countPosts}) => {
  return (
    <>
      <Typography className={styles.h1}>
        Заголовок <span className={styles.span}>({countPosts})</span>
      </Typography>
    </>
  )
}

export default Heading
