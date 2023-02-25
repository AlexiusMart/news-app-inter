import {Modal, Typography} from '@mui/material'
import {Box} from '@mui/system'
import ModalContent from '../modal-content/ModalContent'

import styles from './modal-news.module.scss'

const ModalNews = () => {
  return (
    <>
      <Box className={styles.box}>
        <ModalContent />
      </Box>
    </>
  )
}

export default ModalNews
