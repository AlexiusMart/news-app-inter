import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import styles from './preview-post.module.scss'
import ModalBox from '@/components/modal/modal-box/ModalBox'

const PreviewPost = ({country, city, title, created}) => {
  function shortenedTitle() {
    let shortTitle = title

    if (title.length > 20) {
      const lastSpaceIndex = title.lastIndexOf(' ', 39)
      shortTitle =
        lastSpaceIndex === -1
          ? title.slice(0, 40)
          : title.slice(0, lastSpaceIndex)
      shortTitle += '...'
    }
    return shortTitle
  }

  function changeFormatDate(created) {
    const dateString = created
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    const formattedDate = `${day}.${month}.${year}`
    return formattedDate
  }

  return (
    <>
      <Card sx={{maxWidth: 248, maxHeight: 204}} className={styles.wrapper}>
        <CardContent>
          <Typography className={styles.subtitle}>
            {country}, {city}
          </Typography>
          <Typography variant='h3' component='div' className={styles.h3}>
            {shortenedTitle(title)}
          </Typography>
        </CardContent>
        <CardActions className={styles.wrapperLink}>
          <ModalBox />
        </CardActions>
        <Typography className={styles.date}>
          Добавлено {changeFormatDate(created)}
        </Typography>
      </Card>
    </>
  )
}

export default PreviewPost
