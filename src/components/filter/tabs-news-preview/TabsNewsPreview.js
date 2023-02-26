import styles from './tabs-news-preview.module.scss'

const TabsNewsPreview = ({application}) => {
  return (
    <>
      <li className={`${styles.tab}`}>{application}</li>
    </>
  )
}

export default TabsNewsPreview