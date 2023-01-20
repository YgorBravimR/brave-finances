import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

export default function Expenses() {
  const { setOpenTransactionModal, setTransactionType } = useContext(TransactionsContext)
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
