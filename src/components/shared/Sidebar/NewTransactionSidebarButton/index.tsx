import { useContext, useState } from 'react'
import { Backdrop, Button, Fade, Menu, MenuItem, Modal } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { ModalContainer } from './styles';
import { ModalContext } from '../../../../contexts/ModalContext';
import { FormTransaction } from '../../../transactions/FormTransaction';

type Props = {
	buttonText?: React.ReactNode
	startIcon?: React.ReactNode
}

export function NewTransactionSidebarButton({ buttonText, startIcon }: Props) {
	const { handleCloseModal, openModal, setOpenModal } = useContext(ModalContext)

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

		</div>
	);
}
