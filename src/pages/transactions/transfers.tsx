import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsModalContext } from "../../contexts/TransactionsModalContext";

export default function Transfer() {
  const { setOpenCreditCardTransactionModal, setTransactionType } = useContext(TransactionsModalContext)
  function handleOpenModalSetTransactionType() {
    setOpenCreditCardTransactionModal(true)
    setTransactionType("transfer")
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
