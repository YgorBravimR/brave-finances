import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ModalContextType {
  openTransactionModal: boolean
  handleCloseModal: () => void
  setOpenTransactionModal: Dispatch<SetStateAction<boolean>>
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const TransactionsModalContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const handleCloseModal = () => setOpenTransactionModal(false);

  return (
    <TransactionsModalContext.Provider value={{ openTransactionModal, handleCloseModal, setOpenTransactionModal }}>
      {children}
    </TransactionsModalContext.Provider>
  )
}
