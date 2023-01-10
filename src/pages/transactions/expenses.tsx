import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsModalContext } from "../../contexts/TransactionsModalContext";

export default function Expenses() {
  const { setOpenTransactionModal, setTransactionType } = useContext(TransactionsModalContext)
  function handleOpenModalSetTransactionType() {
    setOpenTransactionModal(true)
    setTransactionType("expense")
  }

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpenModalSetTransactionType}
      >
        New Expense
      </Button>
    </>
  )
}
