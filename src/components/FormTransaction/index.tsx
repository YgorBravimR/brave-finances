import { FormTransactionContainer } from './styles'

import * as yup from 'yup'
import { InputDateFormatter } from '../../utils/formatter';
import { useFormik } from 'formik';
import { Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useState } from 'react';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';
import { useModalContext } from '../../hooks/useModalContext';

export function FormTransaction() {
	const { setOpenModal } = useModalContext()

	const [category, setCategory] = useState('');

	const { setTransactions, transactions } = useTransactionsContext()

	const handleChangeCategorySelect = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
		formik.setFieldValue("category", category)
	};

	const validationSchema = yup.object({
		price: yup
			.number()
			.positive()
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
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			setTransactions([...transactions, values])
			setOpenModal(false)
		},
	});

	return (
		<FormTransactionContainer>
			<form onSubmit={formik.handleSubmit}>
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
				<Select
					variant="standard"
					name="category"
					id="category"
					value={formik.values.category}
					onChange={handleChangeCategorySelect}
				>
					<MenuItem value="salary">Salário</MenuItem>
					<MenuItem value="dividends">Dividendos</MenuItem>
					<MenuItem value="projects">Projetos</MenuItem>
				</Select>
				<RadioGroup
					name="type"
					id="type"
					value={formik.values.type}
					onChange={formik.handleChange}
				>
					<div>
						<FormControlLabel value="income" label="Receita" control={<Radio />} />
						<FormControlLabel value="outcome" label="Despesa" control={<Radio />} />
						<FormControlLabel value="creditCard" label="Cartão de Crédito" control={<Radio />} />
					</div>
				</RadioGroup>
				<Button color="primary" variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</FormTransactionContainer>
	)
}