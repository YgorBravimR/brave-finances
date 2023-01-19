import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

import { jsonApi } from "../services/axios";

interface CreditCardContextType {
  openCreditCardModal: boolean
  handleCloseCreditCardModal: () => void
  setOpenCreditCardModal: Dispatch<SetStateAction<boolean>>
  creditCardsData: ICreditCardsProps | undefined
  cardInput: string
  setCardInput: Dispatch<SetStateAction<string>>
}

interface CreditCardContextProviderProps {
  children: ReactNode;
}

interface ICard {
  id: string,
  flag: string,
  account_id: "dd32e1f2-db4d-4878-b651-fc495f6bc191" | "55fda944-496b-4bf6-9d54-e61c1eead5fa" | "9ae0536b-80e8-482f-a966-13fbd04ca29b",
  description: string,
  limit: string,
  close_date: number,
  due_date: number,
  enable: boolean,
  avaiable_limit: string,
  spent_value: string,
  percent: number, // spent to limit
}

interface ICreditCardsProps {
  best_cc_to_buy: string, // One of the cards
  avaiable_limit: string, // Of the best_cc_to_buy
  total_amount: string, // Sum of the spent_value of all the cards
  cards: ICard[]
}

export const CreditCardContext = createContext({} as CreditCardContextType)

export function CreditCardContextProvider({ children }: CreditCardContextProviderProps) {
  const [openCreditCardModal, setOpenCreditCardModal] = useState(false);
  const handleCloseCreditCardModal = () => setOpenCreditCardModal(false);
  const [cardInput, setCardInput] = useState("")
  const [creditCardsData, setCreditCardsData] = useState<ICreditCardsProps>()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await jsonApi.get('/creditCards');
        console.log(response)
        setCreditCardsData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);



  return (
    <CreditCardContext.Provider value={{
        setCardInput,
        cardInput,
        creditCardsData,
        openCreditCardModal,
        handleCloseCreditCardModal,
        setOpenCreditCardModal
      }}
    >
      {children}
    </CreditCardContext.Provider>
  )
}
