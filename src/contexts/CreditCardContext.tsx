import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface CreditCardContextType {
  openCreditCardModal: boolean
  handleCloseCreditCardModal: () => void
  setOpenCreditCardModal: Dispatch<SetStateAction<boolean>>
}

interface CreditCardContextProviderProps {
  children: ReactNode;
}

export const CreditCardContext = createContext({} as CreditCardContextType)

export function CreditCardContextProvider({ children }: CreditCardContextProviderProps) {
  const [openCreditCardModal, setOpenCreditCardModal] = useState(false);
  const handleCloseCreditCardModal = () => setOpenCreditCardModal(false);


  return (
    <CreditCardContext.Provider value={{ openCreditCardModal, handleCloseCreditCardModal, setOpenCreditCardModal }}>
      {children}
    </CreditCardContext.Provider>
  )
}
