import {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import ModalContent from '../modal-content/ModalContent'

import styles from './modal-box.module.scss'

export default function ModalBox() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen} className={styles.link}>ПОСМОТРЕТЬ</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={styles.box}>
          <ModalContent />
        </Box>
      </Modal>
    </div>
  )
}

// const ModalNews = () => {
//   return (
//     <>
//       <Box className={styles.box}>
//         <ModalContent />
//       </Box>
//     </>
//   )
// }

// export default ModalNews
