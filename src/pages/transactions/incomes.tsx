import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { theme } from "../../styles/theme";

export default function Incomes() {
  const { setOpenTransactionModal, setTransactionType } = useContext(TransactionsContext)
  function handleOpenModalSetTransactionType() {
    setOpenTransactionModal(true)
    setTransactionType("income")
  }

  return (
    <>
      <Button
        variant="contained"
        color={theme.palette.income.main}
        onClick={handleOpenModalSetTransactionType}
      >
        New Income
      </Button>
    </>
  )
}
