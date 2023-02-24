import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styles from './post.module.scss'

const Post = () => {
  return (
    <>
      <Card sx={{maxWidth: 248, maxHeight: 204}} className={styles.wrapper}>
        <CardContent>
          <Typography
            className={styles.subtitle}
            color='text.secondary'
            gutterBottom
          >
            Россия, Мурманск
          </Typography>
          <Typography variant='h3' component='div' className={styles.h3}>
            Банк доверил роботам процессы в операционном блоке
          </Typography>
        </CardContent>
        <CardActions className={styles.wrapperLink}>
          <Button size='small' className={styles.link}>
            ПОСМОТРЕТЬ
          </Button>
        </CardActions>
        <Typography className={styles.date}>
        Добавлено 6.02.2020
      </Typography>
      </Card>
    </>
  )
}

export default Post
