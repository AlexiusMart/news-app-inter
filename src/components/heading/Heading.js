import styles from './heading.module.scss'

const Heading = () => {
  return (
    <>
      <h1 className={styles.h1}>
        Заголовок <span className={styles.span}>(232)</span>
      </h1>
    </>
  )
}

export default Heading