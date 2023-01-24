import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

import { jsonApi } from "../services/axios";
import { accountsArray } from "../utils/transactionts";

interface AccountsContextType {
  openNewAccountModal: boolean
  setOpenNewAccountModal: Dispatch<SetStateAction<boolean>>
  handleCloseNewAccountModal: () => void
  account: string
  setAccount: Dispatch<SetStateAction<string>>
  accountsData: AccountsApiProps | undefined
  setAccountsData: Dispatch<SetStateAction<AccountsApiProps | undefined>>
}

interface AccountsContextProviderProps {
  children: ReactNode;
}

interface IAccount {
  id: string,
  initial_price: string,
  account_name: string,
  description: string,
  color: string | null,
  simulated_yield: string | null,
  type: 'checking' | 'savings' | 'investments' | 'money' | 'other',
  yield_model: string | null,
  bank: 'nubank' | 'inter' | 'itau' | 'santander' | 'bradesco' | 'other' | 'xp',
  current_balance: string,
  predicted_balance: string,
}

interface AccountsApiProps {
  current_balance: string,
  predicted_valance: string,
  accounts: IAccount[]
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsContextProvider({ children }: AccountsContextProviderProps) {
  const [openNewAccountModal, setOpenNewAccountModal] = useState(false);
  const handleCloseNewAccountModal = () => setOpenNewAccountModal(false);
  const [accountsData, setAccountsData] = useState<AccountsApiProps>()
  const [account, setAccount] = useState(accountsArray[0].value);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await jsonApi.get('/accounts');
        setAccountsData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <AccountsContext.Provider value={{
        setAccountsData,
        accountsData,
        setAccount,
        account,
        openNewAccountModal,
        handleCloseNewAccountModal,
        setOpenNewAccountModal
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}
