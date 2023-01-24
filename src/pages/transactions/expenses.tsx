import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { theme } from "../../styles/theme";

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
        color={theme.palette.outcome.main}
        onClick={handleOpenModalSetTransactionType}
      >
        New Expense
      </Button>
    </>
  )
}
