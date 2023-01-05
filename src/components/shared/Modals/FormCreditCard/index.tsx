import * as yup from 'yup'
import { useFormik } from 'formik';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, } from '@mui/material';
import { FormTransactionContainer } from './styles'
import { Bank, CalendarBlank, CalendarCheck, File, TagChevron } from 'phosphor-react';
import { useState } from 'react';
import { daysOfTheMonth } from '../../../../utils/transactionts';

interface CreditCardProps {
  limit: string;
  description: string;
  flag: string;
  account: string;
  closing_day: number;
  due_date: number;
}

export function FormCreditCard() {
  const [flag, setFlag] = useState('cartao1');
  const [accountName, setAccountName] = useState('conta1');
  const [closingDay, setClosingDay] = useState('01');
  const [dueDate, setDueDate] = useState('05');


  const handleChangeFlagSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("flag", value)
    setFlag(value as string);
  };

  const handleChangeAccountNameSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("account_name", value)
    setAccountName(value as string);
  };

  const handleChangeClosingDaySelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("closing_day", value)
    setClosingDay(value as string);
  };

  const handleChangeDueDateSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("due_date", value)
    setDueDate(value as string);
  };


  const validationSchema = yup.object({
    limit: yup.string().required(),
    description: yup.string().required(),
    flag: yup.string().required(),
    account_name: yup.string().required(),
    closing_day: yup.number().required(),
    due_date: yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      limit: "",
      description: "",
      flag: "cartao1",
      account_name: "conta1",
      closing_day: 1,
      due_date: 5,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  const iconSize = 24

  return (
    <FormTransactionContainer onSubmit={formik.handleSubmit}>
      <h2>New credit card</h2>
      <TextField
        variant='standard'
        id="limit"
        name="limit"
        type="text"
        placeholder="R$ 0,00"
        value={formik.values.limit}
        onChange={formik.handleChange}
        error={formik.touched.limit && Boolean(formik.errors.limit)}
        helperText={formik.touched.limit && formik.errors.limit}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <File size={iconSize} />
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
          name="flag"
          id="flag"
          value={flag}
          startAdornment={
            <InputAdornment position="start">
              <TagChevron size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeFlagSelect}
        >
          <MenuItem value="cartao1">Cartão 01</MenuItem>
          <MenuItem value="cartao2">Cartão 02</MenuItem>
          <MenuItem value="cartao3">Cartão 03</MenuItem>
          <MenuItem value="cartao4">Cartão 04</MenuItem>
          <MenuItem value="cartao5">Cartão 05</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Select
          variant="standard"
          name="account_name"
          id="account_name"
          value={accountName}
          startAdornment={
            <InputAdornment position="start">
              <Bank size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeAccountNameSelect}
        >
          <MenuItem value="conta1">Conta 01</MenuItem>
          <MenuItem value="conta2">Conta 02</MenuItem>
          <MenuItem value="conta3">Conta 03</MenuItem>
          <MenuItem value="conta4">Conta 04</MenuItem>
          <MenuItem value="conta5">Conta 05</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="closing_day_label">Closing Day</InputLabel>
        <Select
          labelId='closing_day_label'
          variant="standard"
          name="closing_day"
          id="closing_day"
          value={closingDay}
          startAdornment={
            <InputAdornment position="start">
              <CalendarBlank size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeClosingDaySelect}
        >
          {daysOfTheMonth.map((day) => {
            return (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="due_date_label">Due Date</InputLabel>
        <Select
          labelId='due_date_label'
          variant="standard"
          name="due_date"
          id="due_date"
          value={dueDate}
          startAdornment={
            <InputAdornment position="start">
              <CalendarCheck size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeDueDateSelect}
        >
          {daysOfTheMonth.map((day) => {
            return (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </FormTransactionContainer>
  )
}




