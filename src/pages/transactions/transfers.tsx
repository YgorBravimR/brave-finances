import { Button } from "@mui/material";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { theme } from "../../styles/theme";

export default function Transfer() {
  const { setOpenCreditCardTransactionModal, setTransactionType } = useContext(TransactionsContext)
  function handleOpenModalSetTransactionType() {
    setOpenCreditCardTransactionModal(true)
    setTransactionType("transfer")
  }

  return (
    <>
      <Button
        variant="contained"
        color={theme.palette.transfer.main}
        onClick={handleOpenModalSetTransactionType}
      >
        New Expense
      </Button>
    </>
  )
}
