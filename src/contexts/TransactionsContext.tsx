import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ModalContextType {
  openTransactionModal: boolean
  setOpenTransactionModal: Dispatch<SetStateAction<boolean>>
  openCreditCardTransactionModal: boolean
  setOpenCreditCardTransactionModal: Dispatch<SetStateAction<boolean>>
  openTransferModal: boolean
  setOpenTransferModal: Dispatch<SetStateAction<boolean>>
  transactionType: string
  setTransactionType: Dispatch<SetStateAction<string>>
  handleCloseModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openCreditCardTransactionModal, setOpenCreditCardTransactionModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [transactionType, setTransactionType] = useState("expense")

  const handleCloseModal = () => {
    setOpenTransactionModal(false)
    setOpenCreditCardTransactionModal(false)
    setOpenTransferModal(false)
  };

  return (
    <TransactionsContext.Provider value={{ setOpenTransferModal, openTransferModal, setOpenCreditCardTransactionModal, openCreditCardTransactionModal, openTransactionModal, handleCloseModal, transactionType, setTransactionType, setOpenTransactionModal }}>
      {children}
    </TransactionsContext.Provider>
  )
}
