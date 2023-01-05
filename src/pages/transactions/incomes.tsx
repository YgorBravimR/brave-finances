import { Button } from "@mui/material";
import { useContext } from "react";
import { TransactionsModalContext } from "../../contexts/TransactionsModalContext";

export default function Incomes() {
  const { setOpenTransactionModal, setTransactionType } = useContext(TransactionsModalContext)
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
