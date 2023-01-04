import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ModalContextType {
  openTransactionModal: boolean
  setOpenTransactionModal: Dispatch<SetStateAction<boolean>>
  transactionType: string
  setTransactionType: Dispatch<SetStateAction<string>>

  handleCloseModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const TransactionsModalContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [transactionType, setTransactionType] = useState("expense")
  const handleCloseModal = () => setOpenTransactionModal(false);

  return (
    <TransactionsModalContext.Provider value={{ openTransactionModal, handleCloseModal, transactionType, setTransactionType, setOpenTransactionModal }}>
      {children}
    </TransactionsModalContext.Provider>
  )
}
