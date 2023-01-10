import { Fade, Modal } from '@mui/material'
import { ReactNode } from 'react'

import { ModalContainer } from './styles'

type Props = {
  children: ReactNode
  openModal: any;
  closeModal: () => void;
}

export function BaseModal({ children, openModal, closeModal }: Props) {
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <ModalContainer>
          {children}
        </ModalContainer>
      </Fade>
    </Modal>
  )
}
