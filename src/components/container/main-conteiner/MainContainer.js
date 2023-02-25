import ModalNews from '@/components/modal/modal-news/ModalNews'
import NewsContainer from '../news-container/NewsContainer'

import styles from './main-container.module.scss'

const MainContainer = () => {
  return (
    <div className={styles.wrapper}>
      <ModalNews />
    </div>
  )
}

export default MainContainer
