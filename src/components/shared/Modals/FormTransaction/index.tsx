import * as yup from 'yup'
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Chip, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField, useTheme } from '@mui/material';
import { SwitchLabelContent, RepeatBlockContainer, SwitchContent, FormTransactionContainer, FormTransactionLeftBlock, FormTransactionRightBlock, } from './styles'
import { InputDateFormatter } from '../../../../utils/formatter';
import { categoriesArray, accountsArray, tagsArray } from '../../../../utils/transactionts';
import { TransactionsModalContext } from '../../../../contexts/TransactionsModalContext';
import { CalendarCheck, CheckCircle, XCircle, Bookmark, File, Bank, Tag } from 'phosphor-react';
import { AccountsContext } from '../../../../contexts/AccountsContext';


interface NewTransactionFormInputs {
	price: string,
	received_paid: boolean;
	date: string,
	description: string,
	category: string,
	type: 'income' | 'expense' | 'credit_card' | 'transfer',
	account: string,
	tag: string;
	currency: string;
	fixed: boolean;
	repeat: boolean;
	repeated_times: number;
	time_period: string;
}

export function FormTransaction() {
	const [category, setCategory] = useState(categoriesArray[0].value);
	const [timePeriod, setTimePeriod] = useState('days');
	const [paidChecked, setPaidChecked] = useState(true);
	const [tagsSelect, setTagsSelect] = useState<string[]>([]);
	const [fixedExpense, setFixedExpense] = useState(false);
	const [repeatExpense, setRepeatExpense] = useState(false);

	const { setAccount, account } = useContext(AccountsContext)
	const { transactionType } = useContext(TransactionsModalContext)


	const handleChangeReceivedPaid = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target
		setPaidChecked(checked);
		formik.setFieldValue("received_paid", checked)
	};

	const handleChangeFixedExpense = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target
		setFixedExpense(checked);
		formik.setFieldValue("fixed", checked)
		repeatExpense && formik.setFieldValue("repeat", !checked)
		repeatExpense && setRepeatExpense(!checked)
	};

	const handleChangeRepeatExpense = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target
		setRepeatExpense(checked);
		formik.setFieldValue("repeat", checked)
		fixedExpense && formik.setFieldValue("fixed", !checked)
		fixedExpense && setFixedExpense(!checked)
	};

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

	const handleChangeTimePeriodSelect = (event: SelectChangeEvent) => {
		const { value } = event.target
		formik.setFieldValue("time_period", value)
		setTimePeriod(value as string);
	};

	const handleChangeTagsSelect = (event: SelectChangeEvent<typeof tagsSelect>) => {
		const {
			target: { value },
		} = event;
		setTagsSelect(
			typeof value === 'string' ? value.split(',') : value,
		);
		formik.setFieldValue('tags', value)
	};

	// async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
	// 	const { account, category, date, description, price, type } = data;

	// 	await api.post('transactions', {
	// 		account, category, date, description, price, type
	// 	})
	// }

	const validationSchema = yup.object({
		price: yup.string().required('Digite um valor acima de 1'),
		date: yup.string().required('Selecione o dia da transação'),
		description: yup.string().required('Descreva sua transação, melhor para não se perder depois'),
		category: yup.string().required('Selecione a categoria'),
		type: yup.string().required('Selecione o tipo de transação'),
		account: yup.string().required('Selecione o tipo de transação'),
		received_paid: yup.boolean(),
		tags: yup.array(),
		fixed: yup.boolean(),
		repeat: yup.boolean(),
		repeated_times: yup.number(),
		time_period: yup.string(),
	});

	const todayDate = InputDateFormatter(new Date().getTime())

	const formik = useFormik({
		initialValues: {
			price: "",
			received_paid: true,
			date: todayDate,
			description: "",
			category: categoriesArray[0].value,
			account: accountsArray[0].value,
			tags: "",
			fixed: false,
			repeat: false,
			repeated_times: 0,
			time_period: "days",
			type: transactionType,

		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// handleCreateNewTransaction(values)
			alert(JSON.stringify(values, null, 2));
			console.log(values)
			// setOpenModal(false)
		},
	});

	const switchLabel = (
		paidChecked ? (
			<SwitchLabelContent>
				<CheckCircle size={24} />
				<span>It was paid</span>
			</SwitchLabelContent>
		) : (
			<SwitchLabelContent>
				<XCircle size={24} />
				<span>Not paid</span>
			</SwitchLabelContent>
		)
	)


	const iconSize = 24

	return (
		<FormTransactionContainer onSubmit={formik.handleSubmit}>
			<FormTransactionLeftBlock>
				<h2>New {transactionType}</h2>
				<TextField
					type="number"
					variant='standard'
					id="price"
					name="price"
					placeholder="R$ 0,00"
					value={formik.values.price}
					onChange={formik.handleChange}
					error={formik.touched.price && Boolean(formik.errors.price)}
					helperText={formik.touched.price && formik.errors.price}
				/>
				<SwitchContent>
					<FormControlLabel
						value={paidChecked}
						control={<Switch color="primary" checked={paidChecked} onChange={handleChangeReceivedPaid} />}
						label={switchLabel}
						labelPlacement="start"
					/>
				</SwitchContent>
				<TextField
					variant='standard'
					id="date"
					name="date"
					type="date"
					value={formik.values.date}
					onChange={formik.handleChange}
					error={formik.touched.date && Boolean(formik.errors.date)}
					helperText={formik.touched.date && formik.errors.date}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<CalendarCheck size={iconSize} />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					variant='standard'
					id="description"
					name="description"
					type="text"
					placeholder="Description"
					value={formik.values.description}
					onChange={formik.handleChange}
					error={formik.touched.description && Boolean(formik.errors.description)}
					helperText={formik.touched.description && formik.errors.description}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<File size={iconSize} />
							</InputAdornment>
						),
					}}
				/>
				<FormControl>
					<Select
						variant="standard"
						name="category"
						id="category"
						value={category}
						startAdornment={
							<InputAdornment position="start">
								<Bookmark size={iconSize} />
							</InputAdornment>
						}
						onChange={handleChangeCategorySelect}
					>
						{categoriesArray.map((category) => (
							<MenuItem key={category.title} value={category.value}>{category.title}</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<Select
						variant="standard"
						name="account"
						id="account"
						value={account}
						startAdornment={
							<InputAdornment position="start">
								<Bank size={iconSize} />
							</InputAdornment>
						}
						onChange={handleChangeAccountSelect}
					>
						{accountsArray.map(account => (
							<MenuItem key={account.title} value={account.value}>{account.title}</MenuItem>
						))}
					</Select>
				</FormControl>
			</FormTransactionLeftBlock>
			<FormTransactionRightBlock>
				<FormControl>
					{/* <InputLabel id="tags">Tags</InputLabel> */}
					<Select
						labelId="tags"
						multiple
						variant="standard"
						id="tags"
						name="tags"
						value={tagsSelect}
						onChange={handleChangeTagsSelect}
						startAdornment={
							<InputAdornment position="start">
								<Tag size={iconSize} />
							</InputAdornment>
						}
						renderValue={(selected) => (
							<div>
								{selected.map((value) => (
									<Chip key={value} label={value} />
								))}
							</div>
						)}
					>
						{tagsArray.map((tag) => (
							<MenuItem
								key={tag}
								value={tag}
							>
								{tag}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<SwitchContent>
					<FormControlLabel
						value={fixedExpense}
						id="fixed"
						name="fixed"
						control={<Switch color="primary" checked={fixedExpense} onChange={handleChangeFixedExpense} />}
						label={`Fixed ${transactionType}`}
						labelPlacement="start"
					/>
				</SwitchContent>
				<SwitchContent>
					<FormControlLabel
						value={repeatExpense}
						id="repeat"
						name="repeat"
						control={<Switch color="primary" checked={repeatExpense} onChange={handleChangeRepeatExpense} />}
						label="Repeat"
						labelPlacement="start"
					/>
				</SwitchContent>
				<RepeatBlockContainer>
					<TextField
						variant='standard'
						id="repeated_times"
						disabled={!repeatExpense}
						name="repeated_times"
						type="number"
						InputProps={{
							endAdornment: "times"
						}}
						placeholder="times"
						value={formik.values.repeated_times}
						onChange={formik.handleChange}
						error={formik.touched.repeated_times && Boolean(formik.errors.repeated_times)}
						helperText={formik.touched.repeated_times && formik.errors.repeated_times}
					/>
					<FormControl>
						<Select
							variant="standard"
							name="time_period"
							id="time_period"
							disabled={!repeatExpense}
							value={timePeriod}
							onChange={handleChangeTimePeriodSelect}
						>
							<MenuItem value='days'>Days</MenuItem>
							<MenuItem value='weeks'>Weeks</MenuItem>
							<MenuItem value='months'>Months</MenuItem>
							<MenuItem value='years'>Years</MenuItem>
						</Select>
					</FormControl>
				</RepeatBlockContainer>
			</FormTransactionRightBlock>
			<Button color="primary" variant="contained" type="submit">
				Submit
			</Button>
		</FormTransactionContainer>
	)
}




