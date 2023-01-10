import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, } from '@mui/material';
import { useFormik } from 'formik';
import { Bank, File } from 'phosphor-react';
import { useState } from 'react';
import * as yup from 'yup'

import { accountTypesArray, banksArray } from '../../../../../utils/transactionts';
import { FormTransactionContainer } from './styles'

export function NewAccountForm() {
  const [bank, setBank] = useState(banksArray[0].value)
  const [type, setType] = useState(accountTypesArray[0].value)

  const handleChangeBankSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("bank", value)
    setBank(value as string);
  };

  const handleChangeTypeSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("type", value)
    setType(value as string);
  };

  const validationSchema = yup.object({
    price: yup.string().required(),
    bank: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      price: "",
      description: "",
      bank: banksArray[0].value,
      type: accountTypesArray[0].value,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  const iconSize = 24
  const muiColor = "primary"

  return (
    <FormTransactionContainer onSubmit={formik.handleSubmit}>
      <h2>New account</h2>
      <TextField
        variant='standard'
        color={muiColor}
        id="price"
        name="price"
        type="number"
        placeholder="R$ 0,00"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <FormControl>
        <InputLabel id='bank_label'>Banking Institution</InputLabel>
        <Select
          labelId='bank_label'
          variant="standard"
          color={muiColor}
          name="bank"
          id="bank"
          value={bank}
          startAdornment={
            <InputAdornment position="start">
              <Bank size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeBankSelect}
        >
          {banksArray.map((bank) => {
            return (
              <MenuItem key={bank.value} value={bank.value}>{bank.title}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <TextField
        variant='standard'
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
        <InputLabel id='type_label'>Type</InputLabel>
        <Select
          labelId='type_label'
          variant="standard"
          color={muiColor}
          name="type"
          id="type"
          value={type}
          startAdornment={
            <InputAdornment position="start">
              <Bank size={iconSize} />
            </InputAdornment>
          }
          onChange={handleChangeTypeSelect}
        >
          {accountTypesArray.map((type) => {
            return (
              <MenuItem key={type.value} value={type.value}>{type.title}</MenuItem>
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




