import {Typography} from '@mui/material'

import styles from './heading.module.scss'

const Heading = () => {
  return (
    <>
      <Typography className={styles.h1}>
        Заголовок <span className={styles.span}>(232)</span>
      </Typography>
    </>
  )
}

export default Heading
