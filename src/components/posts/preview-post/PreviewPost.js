import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import styles from './preview-post.module.scss'
import ModalBox from '@/components/modal/modal-box/ModalBox'

const PreviewPost = ({post}) => {
  function shortenedTitle() {
    let shortTitle = post.title

    if (post.title.length > 20) {
      const lastSpaceIndex = post.title.lastIndexOf(' ', 39)
      shortTitle =
        lastSpaceIndex === -1
          ? post.title.slice(0, 40)
          : post.title.slice(0, lastSpaceIndex)
      shortTitle += '...'
    }
    return shortTitle
  }

  function changeFormatDate(created) {
    const date = new Date(created)
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }

    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date)
    return formattedDate
  }

  return (
    <>
      <Card sx={{maxWidth: 248, maxHeight: 204}} className={styles.wrapper}>
        <CardContent>
          <Typography className={styles.subtitle}>
            {post.country}, {post.city}
          </Typography>
          <Typography variant='h3' component='div' className={styles.h3}>
            {shortenedTitle(post.title)}
          </Typography>
        </CardContent>
        <CardActions className={styles.wrapperLink}>
          <ModalBox post={post} />
        </CardActions>
        <Typography className={styles.date}>
          Добавлено {changeFormatDate(post.created)}
        </Typography>
      </Card>
    </>
  )
}

export default PreviewPost
