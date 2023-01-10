import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsModalContext } from "../../contexts/TransactionsModalContext";

export default function CreditCard() {
  const { setOpenCreditCardTransactionModal, setTransactionType } = useContext(TransactionsModalContext)
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
