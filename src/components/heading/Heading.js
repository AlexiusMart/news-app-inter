import {Typography} from '@mui/material'

import styles from './heading.module.scss'

const Heading = ({filteredPosts}) => {
  return (
    <>
      <Typography className={styles.h1}>
        Заголовок <span className={styles.span}>({filteredPosts.length})</span>
      </Typography>
    </>
  )
}

export default Heading
