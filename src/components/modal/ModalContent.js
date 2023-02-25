import styles from './modal-content.module.scss'

const ModalContent = () => {
  return (
    <>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Text in a modal
      </Typography>
      <Typography id='modal-modal-description' sx={{mt: 2}}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </>
  )
}

export default ModalContent
