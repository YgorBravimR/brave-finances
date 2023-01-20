import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

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
        color="secondary"
        onClick={handleOpenModalSetTransactionType}
      >
        New Expense
      </Button>
    </>
  )
}
