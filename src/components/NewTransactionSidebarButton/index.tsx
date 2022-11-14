import { Backdrop, Button, Fade, Menu, MenuItem, Modal } from '@mui/material';
import { NewTransactionMenuContainer, ModalContainer } from './styles';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { useState } from 'react'
import { FormTransaction } from '../FormTransaction';
import { useModalContext } from '../../hooks/useModalContext';

type Props = {
	buttonText?: React.ReactNode
	startIcon?: React.ReactNode
}

export function NewTransactionSidebarButton({ buttonText, startIcon }: Props) {
	const { handleCloseModal, openModal, setOpenModal } = useModalContext()

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
		setOpenModal(true)
	}

	return (
		<NewTransactionMenuContainer>
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
					<TrendingDownIcon color='error' />
					<p>Despesa</p>
				</MenuItem>
				<MenuItem
					onClick={handleCLoseMenuOpenModal}
				>
					<TrendingUpIcon color='success' />
					<p>Receita</p>
				</MenuItem>
			</Menu>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openModal}>
					<ModalContainer>
						<FormTransaction />
					</ModalContainer>
				</Fade>
			</Modal>

		</NewTransactionMenuContainer>
	);
}

