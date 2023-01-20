import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, } from '@mui/material';
import { useFormik } from 'formik';
import { Bank, CalendarBlank, CalendarCheck, File, TagChevron } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import * as yup from 'yup'

import { creditCardsArray, flagsArray } from '../../../../../api/mockArrays';
import { AccountsContext } from '../../../../../contexts/AccountsContext';
import { CreditCardContext } from '../../../../../contexts/CreditCardContext';
import { api } from '../../../../../services/axios';
import { daysOfTheMonth } from '../../../../../utils/transactionts';
import { FormTransactionContainer } from './styles'

export function FormCreditCard() {
  const [flag, setFlag] = useState(creditCardsArray[0].flag);
  const [closingDay, setClosingDay] = useState('01');
  const [dueDate, setDueDate] = useState('05');

  const {setOpenCreditCardModal} = useContext(CreditCardContext)
  const { accountsData, account, setAccount } = useContext(AccountsContext)

  const accountsArray = accountsData?.accounts

  useEffect(() => {
    accountsArray && setAccount(accountsArray[0].id)
  }, [accountsArray, setAccount])

  const handleChangeFlagSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("flag", value)
    setFlag(value as string);
  };

  const handleChangeAccountNameSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("account_id", value)
    setAccount(value as string);
  };

  const handleChangeClosingDaySelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("close_date", value)
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
    account_id: yup.string().required(),
    close_date: yup.number().required(),
    due_date: yup.number().required(),
  });
  const formik = useFormik({
    initialValues: {
      limit: "",
      description: "",
      flag: creditCardsArray[0].flag,
      account_id: account,
      close_date: 1,
      due_date: 5,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      await api.post('/creditCards', values)
      setOpenCreditCardModal(false)
    },
  });

  const iconSize = 24
  const muiColor = "secondary"


  return (
    <FormTransactionContainer onSubmit={formik.handleSubmit}>
      <h2>New credit card</h2>
      <TextField
        variant='standard'
        color={muiColor}
        id="limit"
        name="limit"
        type="text"
        placeholder="R$ 0,00"
        value={formik.values.limit}
        onChange={formik.handleChange}
        error={formik.touched.limit && Boolean(formik.errors.limit)}
        helperText={formik.touched.limit && formik.errors.limit}
      />
      <TextField
        variant='standard'
        label="Description"
        color={muiColor}
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
        <InputLabel id="flag_label">Flag</InputLabel>
        <Select
          variant="standard"
          labelId='flag_label'
          color={muiColor}
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
          {
            flagsArray.map((flag, i) => (
              <MenuItem key={i} value={flag}>{flag}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="account_id_label">Account</InputLabel>
        <Select
          variant="standard"
          labelId='account_id_label'
          color={muiColor}
          name="account_id"
          id="account_id"
          value={account}
          startAdornment={
            <InputAdornment position="start">
              <Bank size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeAccountNameSelect}
        >
          {
            accountsArray &&
            accountsArray.map((account) => (
              <MenuItem key={account.id} value={account.id}>{account.account_name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="closing_day_label">Closing Day</InputLabel>
        <Select
          labelId='closing_day_label'
          variant="standard"
          color={muiColor}
          name="close_date"
          id="close_date"
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
          color={muiColor}
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
      <Button color={muiColor} variant="contained" type="submit">
        Submit
      </Button>
    </FormTransactionContainer>
  )
}




