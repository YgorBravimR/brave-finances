import { Fade, Modal } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  openModal: any;
  closeModal: () => void;
}

export function TransactionModal({ children, openModal, closeModal }: Props) {
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <div>
          {children}
        </div>
      </Fade>
    </Modal>
  )
}
