import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

import { accountsArray } from "../utils/transactionts";

interface AccountsContextType {
  openNewAccountModal: boolean
  setOpenNewAccountModal: any
  handleCloseNewAccountModal: () => void
  account: string
  setAccount: Dispatch<SetStateAction<string>>
}

interface AccountsContextProviderProps {
  children: ReactNode;
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsContextProvider({ children }: AccountsContextProviderProps) {
  const [openNewAccountModal, setOpenNewAccountModal] = useState(false);
  const handleCloseNewAccountModal = () => setOpenNewAccountModal(false);
  const [account, setAccount] = useState(accountsArray[0].value);


  return (
    <AccountsContext.Provider value={{ setAccount, account, openNewAccountModal, handleCloseNewAccountModal, setOpenNewAccountModal }}>
      {children}
    </AccountsContext.Provider>
  )
}
