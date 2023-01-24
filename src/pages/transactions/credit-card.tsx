import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { theme } from "../../styles/theme";

export default function CreditCard() {
  const { setOpenCreditCardTransactionModal, setTransactionType } = useContext(TransactionsContext)
  function handleOpenModalSetTransactionType() {
    setOpenCreditCardTransactionModal(true)
    setTransactionType("credit-card")
  }

  return (
    <>
      <Button
        variant="contained"
        color={theme.palette.creditCard.main}
        onClick={handleOpenModalSetTransactionType}
      >
        New Expense
      </Button>
    </>
  )
}
