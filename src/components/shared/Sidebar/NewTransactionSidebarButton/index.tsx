import { Button, Menu, MenuItem } from '@mui/material';
import { ArrowsCounterClockwise, CreditCard, TrendDown, TrendUp } from 'phosphor-react';
import { ReactNode, useContext, useState } from 'react'

import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { BaseModal } from '../../Modals/BaseModal';
import { CreditCardTransactionForm } from '../../Modals/Forms/CreditCardTransactionForm';
import { FormTransaction } from '../../Modals/Forms/InOutTransaction';
import { TransferForm } from '../../Modals/Forms/TransferForm';

type Props = {
	buttonText?: ReactNode
	startIcon?: ReactNode
}

export function NewTransactionSidebarButton({ buttonText, startIcon }: Props) {
	const [isNewTransactionMenuOpen, setIsNewTransactionMenuOpen] = useState<null | HTMLElement>(null);

	const {
		handleCloseModal,
		openTransactionModal,
		setOpenTransactionModal,
		setTransactionType,
		setOpenCreditCardTransactionModal,
		openCreditCardTransactionModal,
		openTransferModal,
		setOpenTransferModal
	} = useContext(TransactionsContext)

	// const {creditCardsData, setCardInput} = useContext(CreditCardContext)

	// const firstCreditCardOfArray = creditCardsData.cards[0]

	const openMenu = Boolean(isNewTransactionMenuOpen);

	const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
		setIsNewTransactionMenuOpen(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setIsNewTransactionMenuOpen(null);
	};

	const handleCLoseMenuOpenModalExpense = () => {
		setTransactionType("expense")
		setIsNewTransactionMenuOpen(null)
		setOpenTransactionModal(true)
	}

	const handleCLoseMenuOpenModalIncome = () => {
		setTransactionType("income")
		setIsNewTransactionMenuOpen(null)
		setOpenTransactionModal(true)
	}

	const handleCLoseMenuOpenModalCreditCard = () => {
		setTransactionType("credit-card")
		// setCardInput(firstCreditCardOfArray)
		setIsNewTransactionMenuOpen(null)
		setOpenCreditCardTransactionModal(true)
	}

	const handleCLoseMenuOpenModalTransfer = () => {
		setTransactionType("transfer")
		setIsNewTransactionMenuOpen(null)
		setOpenTransferModal(true)
	}

	return (
		<div>
			<Button
				onClick={handleClickMenu}
				variant="contained"
				startIcon={startIcon}
			>
				{buttonText}
			</Button>
			<Menu
				anchorEl={isNewTransactionMenuOpen}
				open={openMenu}
				onClose={handleCloseMenu}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				PaperProps={{
					style: {
						width: '180px',
						borderRadius: '12px',
					}
				}}
			>
				<MenuItem
					onClick={handleCLoseMenuOpenModalExpense}
				>
					<TrendDown size={20} color="#f44336" />
					<p>Expense</p>
				</MenuItem>
				<MenuItem
					onClick={handleCLoseMenuOpenModalIncome}
				>
					<TrendUp size={20} color="#4caf50" />
					<p>Income</p>
				</MenuItem>
				<MenuItem
					onClick={handleCLoseMenuOpenModalCreditCard}
				>
					<CreditCard size={20} color="#00796b" />
					<p>Credit Card</p>
				</MenuItem>
				<MenuItem
					onClick={handleCLoseMenuOpenModalTransfer}
					sx={{
						display: 'flex',
						gap: '1rem'
					}}
				>
					<ArrowsCounterClockwise size={20} color="#2296f3" />
					<p>Transfer</p>
				</MenuItem>
			</Menu>
			<BaseModal closeModal={handleCloseModal} openModal={openTransactionModal}>
				<FormTransaction />
			</BaseModal>
			<BaseModal closeModal={handleCloseModal} openModal={openCreditCardTransactionModal}>
				<CreditCardTransactionForm />
			</BaseModal>
			<BaseModal closeModal={handleCloseModal} openModal={openTransferModal}>
				<TransferForm />
			</BaseModal>
		</div>
	);
}
