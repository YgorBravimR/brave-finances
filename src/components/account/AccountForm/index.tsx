import * as yup from 'yup'
import { useState } from 'react';
import { useFormik } from 'formik';
import { AccountFormContainer } from "./styles";
import { Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

export function AccountForm() {
  const [bankSelect, setBankSelect] = useState('')
  const [typeSelect, setTypeSelect] = useState('')


  const handleChangeBankSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    setBankSelect(value as string);
    formik.setFieldValue("bank", value)
  };

  const handleChangeTypeSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    setTypeSelect(value as string);
    formik.setFieldValue("type", value)
  };



  const validationSchema = yup.object({});

  const formik = useFormik({
    initialValues: {
      account_name: "",
      bank: "",
      type: "",
      description: "",
      value: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // setOpenModal(false)
    },
  });

  return (
    <AccountFormContainer onSubmit={formik.handleSubmit}>
      <TextField
        type="number"
        variant='standard'
        fullWidth
        id="value"
        name="value"
        placeholder="R$ 0,00"
        value={formik.values.value}
        onChange={formik.handleChange}
      />
      <FormControl>
        <Select
          variant="standard"
          name="type"
          id="type"
          value={typeSelect}
          onChange={handleChangeTypeSelect}
        >
          <MenuItem value="checking">Checking Account</MenuItem>
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="money">Money</MenuItem>
          <MenuItem value="other_type">Others</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="text"
        variant='standard'
        fullWidth
        id="account_name"
        name="account_name"
        placeholder="Account Name"
        value={formik.values.account_name}
        onChange={formik.handleChange}
      />
      <TextField
        type="text"
        variant='standard'
        fullWidth
        id="description"
        name="description"
        placeholder="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <FormControl>
        <Select
          variant="standard"
          name="bank"
          id="bank"
          value={bankSelect}
          onChange={handleChangeBankSelect}
        >
          <MenuItem value="nubank">Nubank</MenuItem>
          <MenuItem value="itau">Itau</MenuItem>
          <MenuItem value="santander">Santander</MenuItem>
          <MenuItem value="bradesco">Bradesco</MenuItem>
          <MenuItem value="inter">Inter</MenuItem>
          <MenuItem value="banco_do_brasil">Banco do Brasil</MenuItem>
          <MenuItem value="other_bank">Outros</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </AccountFormContainer>
  )
}
