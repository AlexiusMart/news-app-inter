import NewsContainer from '../news-container/NewsContainer'
import styles from './main-container.module.scss'

const MainContainer = () => {
  return (
    <div className={styles.wrapper}>
      <NewsContainer />
    </div>
  )
}

export default MainContainer
