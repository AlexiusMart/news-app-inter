import TabsNewsPreview from '@/components/filter/tabs-news-preview/TabsNewsPreview'
import {Typography} from '@mui/material'
import styles from './modal-content.module.scss'

const ModalContent = ({news}) => {
  return (
    <>
      <div>
        <ul className={styles.tabWrapper}>
          <TabsNewsPreview {...news} className={styles.tab} />
        </ul>
        <Typography className={styles.subtitle}>
          {news.country}
          {news.city ? `, ${news.city}` : ''}
        </Typography>
        <Typography component='h1' className={styles.h1}>
          {news.title}
        </Typography>
        <div className={styles.info}>
          {news.object ? (
            <div className={styles.infoWrapper}>
              <Typography className={styles.infoTitle}>
                Объект внедрения
              </Typography>
              <Typography className={styles.infoDescr}>
                {news.object}
              </Typography>
            </div>
          ) : null}
          {news.direction ? (
            <div className={styles.infoWrapper}>
              <Typography className={styles.infoTitle}>
                Применяемое решение
              </Typography>
              <Typography className={styles.infoDescr}>
                {news.direction}
              </Typography>
            </div>
          ) : null}

          {news.developer ? (
            <div className={styles.infoWrapper}>
              <Typography className={styles.infoTitle}>Разработчик</Typography>
              <Typography className={styles.infoDescr}>
                {news.developer}
              </Typography>
            </div>
          ) : null}
        </div>

        <div className={styles.description}>
          <Typography className={styles.titleDescription}>Описание</Typography>
          <Typography className={styles.mainDescription}>
            {news.description}
          </Typography>
        </div>
      </div>
    </>
  )
}

export default ModalContent
