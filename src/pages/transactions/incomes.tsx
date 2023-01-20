import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

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
        color="success"
        onClick={handleOpenModalSetTransactionType}
      >
        New Income
      </Button>
    </>
  )
}
