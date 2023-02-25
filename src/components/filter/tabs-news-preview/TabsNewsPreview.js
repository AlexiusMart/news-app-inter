import styles from './tabs-news-preview.module.scss'

const TabsNewsPreview = () => {
  return (
    <>
      <li className={`${styles.tab}`}>РИТЕЙЛ</li>
      <li className={`${styles.tab} ${styles.active}`}>ПРОМЫШЛЕННОСТЬ</li>
    </>
  )
}

export default TabsNewsPreview