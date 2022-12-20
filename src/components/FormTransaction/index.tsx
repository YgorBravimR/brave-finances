import { FormTransactionContainer, FormTypeRadioGroupContainer } from './styles'

import * as yup from 'yup'
import { InputDateFormatter } from '../../utils/formatter';
import { useFormik } from 'formik';
import { Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { api } from '../../lib/axios';
import { ModalContext } from '../../contexts/ModalContext';
import { TransactionsContext } from '../../contexts/TransactionsContext';

interface NewTransactionFormInputs {
	price: string,
	date: string,
	description: string,
	category: string,
	type: string,
	account: string,
}

export function FormTransaction() {
	const { setOpenModal } = useContext(ModalContext)
	const { setTransactions, transactions } = useContext(TransactionsContext)

	const [category, setCategory] = useState('');
	const [account, setAccount] = useState('');

	const handleChangeCategorySelect = (event: SelectChangeEvent) => {
		const { value } = event.target
		formik.setFieldValue("category", value)
		setCategory(value as string);
	};

	const handleChangeAccountSelect = (event: SelectChangeEvent) => {
		const { value } = event.target
		formik.setFieldValue("account", value)
		setAccount(value as string);
	};

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		const { account, category, date, description, price, type } = data;

		await api.post('transactions', {
			account, category, date, description, price, type
		})
	}

	const validationSchema = yup.object({
		price: yup
			.string()
			.required('Digite um valor acima de 1'),
		date: yup
			.string()
			.required('Selecione o dia da transação'),
		description: yup
			.string()
			.required('Descreva sua transação, melhor para não se perder depois'),
		category: yup
			.string()
			.required('Selecione a categoria'),
		type: yup
			.string()
			.required('Selecione o tipo de transação'),
		account: yup
			.string()
			.required('Selecione o tipo de transação')
	});

	const todayDate = InputDateFormatter(new Date().getTime())



	const formik = useFormik({
		initialValues: {
			price: "",
			date: todayDate,
			description: "",
			category: "",
			type: "",
			account: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleCreateNewTransaction(values)
			alert(JSON.stringify(values, null, 2));
			setTransactions([...transactions, values])
			setOpenModal(false)
		},
	});

	return (
		<FormTransactionContainer onSubmit={formik.handleSubmit}>
			<TextField
				type="number"
				variant='standard'
				fullWidth
				id="price"
				name="price"
				placeholder="R$ 0,00"
				value={formik.values.price}
				onChange={formik.handleChange}
				error={formik.touched.price && Boolean(formik.errors.price)}
				helperText={formik.touched.price && formik.errors.price}
			/>
			<TextField
				variant='standard'
				fullWidth
				id="date"
				name="date"
				type="date"
				value={formik.values.date}
				onChange={formik.handleChange}
				error={formik.touched.date && Boolean(formik.errors.date)}
				helperText={formik.touched.date && formik.errors.date}
			/>
			<TextField
				variant='standard'
				fullWidth
				id="description"
				name="description"
				type="text"
				placeholder="Descrição"
				value={formik.values.description}
				onChange={formik.handleChange}
				error={formik.touched.description && Boolean(formik.errors.description)}
				helperText={formik.touched.description && formik.errors.description}
			/>
			<FormControl>
				<Select
					variant="standard"
					name="category"
					id="category"
					value={category}
					onChange={handleChangeCategorySelect}
				>
					<MenuItem value="salary">Salário</MenuItem>
					<MenuItem value="dividends">Dividendos</MenuItem>
					<MenuItem value="projects">Projetos</MenuItem>
				</Select>
			</FormControl>
			<FormControl>
				<Select
					variant="standard"
					name="account"
					id="account"
					value={account}
					onChange={handleChangeAccountSelect}
				>
					<MenuItem value="account_01">Conta01</MenuItem>
					<MenuItem value="account_02">Conta02</MenuItem>
					<MenuItem value="account_03">Conta03</MenuItem>
					<MenuItem value="account_04">Conta04</MenuItem>
					<MenuItem value="account_05">Conta05</MenuItem>
					<MenuItem value="account_06">Conta06</MenuItem>
				</Select>
			</FormControl>
			<RadioGroup
				name="type"
				id="type"
				value={formik.values.type}
				onChange={formik.handleChange}
			>
				<FormTypeRadioGroupContainer>
					<Button>
						<FormControlLabel value="income" label="Receita" control={<Radio />} />
					</Button>
					<Button>
						<FormControlLabel value="outcome" label="Despesa" control={<Radio />} />
					</Button>
					<Button>
						<FormControlLabel value="creditCard" label="Cartão de Crédito" control={<Radio />} />
					</Button>
				</FormTypeRadioGroupContainer>
			</RadioGroup>
			<Button color="primary" variant="contained" type="submit">
				Submit
			</Button>
		</FormTransactionContainer>
	)
}