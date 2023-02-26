import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styles from './preview-post.module.scss'
import ModalBox from '@/components/modal/modal-box/ModalBox'

const PreviewPost = ({country, city, title, created}) => {
  return (
    <>
      <Card sx={{maxWidth: 248, maxHeight: 204}} className={styles.wrapper}>
        <CardContent>
          <Typography className={styles.subtitle}>
            {country}, {city}
          </Typography>
          <Typography variant='h3' component='div' className={styles.h3}>
            {title}
          </Typography>
        </CardContent>
        <CardActions className={styles.wrapperLink}>
        <ModalBox />
        </CardActions>
        <Typography className={styles.date}>Добавлено {created}</Typography>
      </Card>
    </>
  )
}

export default PreviewPost
