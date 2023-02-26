import {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import ModalContent from '../modal-content/ModalContent'

import styles from './modal-box.module.scss'

export default function ModalBox({post}) {
  const [open, setOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)

  const handleOpen = (news) => {
    setSelectedNews(news)
    setOpen(true)
  }
  const handleClose = () => {
    setSelectedNews(null)
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={() => handleOpen(post)} className={styles.link}>
        ПОСМОТРЕТЬ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={styles.box}>
          <ModalContent news={selectedNews} />
          <Button onClick={handleClose} className={styles.close}></Button>
        </Box>
      </Modal>
    </div>
  )
}
