import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styles from './post.module.scss'

const bull = (
  <Box
    component='span'
    sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
)

const Post = () => {
  return (
    <>
      <Card sx={{maxWidth: 248, maxHeight: 204}}>
        <CardContent>
          <Typography sx={styles.post__title} color='text.secondary' gutterBottom>
            Россия, Мурманск
          </Typography>
          <Typography variant='h5' component='div' className={styles.post__h5}>
            Банк доверил роботам процессы в операционном блоке
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>ПОСМОТРЕТЬ</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Post
