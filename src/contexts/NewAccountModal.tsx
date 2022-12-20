import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface NewAccountModalContextType {
  openModal: boolean
  handleCloseModal: () => void
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

interface NewAccountModalContextProviderProps {
  children: ReactNode;
}

export const NewAccountModalContext = createContext({} as NewAccountModalContextType)

export function NewAccountModalContextProvider({ children }: NewAccountModalContextProviderProps) {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <NewAccountModalContext.Provider value={{ openModal, handleCloseModal, setOpenModal }}>
      {children}
    </NewAccountModalContext.Provider>
  )

}