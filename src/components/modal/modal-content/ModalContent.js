import TabsNewsPreview from '@/components/filter/tabs-news-preview/TabsNewsPreview'
import Subtitle from '@/components/heading/subtitle/Subtitle'
import {Typography} from '@mui/material'
import styles from './modal-content.module.scss'

const ModalContent = () => {
  return (
    <>
      <div>
        <ul className={styles.tabWrapper}>
          <TabsNewsPreview className={styles.tab} />
        </ul>

        <Subtitle className={styles.subtitleModal}>
          Россия, Санкт-Петербург
        </Subtitle>

        <Typography component='h1' className={styles.h1}>
          Поиск медицинских патологий на рентгеновских снимках с помощью
          искусственного интеллекта
        </Typography>

        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <Typography className={styles.infoTitle}>
              Объект внедрения
            </Typography>
            <Typography className={styles.infoDescr}>
              ГБУЗ «Санкт-Петербургский клинический научно- практический центр
              специализированных видов медицинской помощи (онкологический)»
            </Typography>
          </div>
          <div className={styles.infoWrapper}>
            <Typography className={styles.infoTitle}>
              Применяемое решение
            </Typography>
            <Typography className={styles.infoDescr}>Botkin.ai</Typography>
          </div>
          <div className={styles.infoWrapper}>
            <Typography className={styles.infoTitle}>Разработчик</Typography>
            <Typography className={styles.infoDescr}>
              ООО «Интеллоджик»
            </Typography>
          </div>
        </div>

        <div className={styles.description}>
          <Typography className={styles.titleDescription}>Описание</Typography>
          <Typography className={styles.mainDescription}>
            В 2018 году в нескольких регионах РФ запустили пилотные проекты по
            технологии ранней диагностики рака легких на основе скрининга
            медицинских снимков пациентов (КТ, МРТ, маммографических
            исследований, рентгенограмм и флюорографических изображений). Проект
            реализован на базе платформы Botkin.AI. Botkin.AI интегрируется с
            оборудованием клиники, обнаруживает патологии и помимо
            предоставления врачу информации о факте обнаружения опухоли, также
            выделяет вероятные участки снимка. Врач при этом заверяет
            заключение, подтверждая или опровергая результаты анализа. Таким
            образом, окончательное решение по постановке диагноза принимает
            врач. Нейронная сеть Botkin.AI обучается на обширной базе знаний
            медицинских снимков, получаемых из клиник, и в процессе
            непосредственного взаимодействия с врачами. Цель проекта -
            апробировать механизмы эффективного использования технологий
            искусственного интеллекта для выявления заболеваний на ранних
            стадиях и снизить риска возникновения человеческого фактора (пропуск
            патологий в условиях плотного потока пациентов), что в свою очередь
            приведет к повышению эффективности российской медицинской помощи.
          </Typography>
        </div>
      </div>
    </>
  )
}

export default ModalContent
