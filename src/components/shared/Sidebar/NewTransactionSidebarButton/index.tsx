import { useContext, useState, ReactNode } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { TransactionsModalContext } from '../../../../contexts/TransactionsModalContext';
import { BaseModal } from '../../BaseModal';
import { FormTransaction } from '../../TransactionModal/FormTransaction';

type Props = {
	buttonText?: ReactNode
	startIcon?: ReactNode
}

export function NewTransactionSidebarButton({ buttonText, startIcon }: Props) {
	const { handleCloseModal, openTransactionModal, setOpenTransactionModal } = useContext(TransactionsModalContext)

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleCLoseMenuOpenModal = () => {
		setAnchorEl(null)
		setOpenTransactionModal(true)
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
				anchorEl={anchorEl}
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
						width: '290px',
						borderRadius: '12px'
					}
				}}
			>
				<MenuItem
					onClick={handleCLoseMenuOpenModal}
				>
					<TrendingDown color='error' />
					<p>Despesa</p>
				</MenuItem>
				<MenuItem
					onClick={handleCLoseMenuOpenModal}
				>
					<TrendingUp color='success' />
					<p>Receita</p>
				</MenuItem>
			</Menu>
			<BaseModal closeModal={handleCloseModal} openModal={openTransactionModal}>
				<FormTransaction />
			</BaseModal>
		</div>
	);
}
