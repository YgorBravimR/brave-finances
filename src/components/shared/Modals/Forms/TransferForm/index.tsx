import { Button, Chip, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Bank, CalendarCheck, Tag } from 'phosphor-react';
import { useState } from 'react';
import * as yup from 'yup'

import { todayDate } from '../../../../../utils/formatter';
import { accountsArray, daysOfTheMonth, tagsArray } from '../../../../../utils/transactionts';
import { SwitchContent } from '../InOutTransaction/styles';
import { FormTransactionContainer, TransferFormLeftBlock, TransferFormRightBlock } from './styles'

export function TransferForm() {
  const [originAccount, setOriginAccount] = useState(accountsArray[0].value)
  const [destinationAccount, setDestinationAccount] = useState(accountsArray[1].value)
  const [tagsSelect, setTagsSelect] = useState<string[]>([]);
  const [recurring, setRecurring] = useState(false)
  const [repeatDay, setRepeatDay] = useState(daysOfTheMonth[4])

  const handleChangeOriginAccountSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("origin_account", value)
    setOriginAccount(value as string);
  };

  const handleChangeDestinationAccountSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("destination_account", value)
    setDestinationAccount(value as string);
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

  const handleChangeRepeatDaySelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("repeat_on_day", value)
    setRepeatDay(value as string);
  };


  const handleChangeRecurring = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setRecurring(checked);
    formik.setFieldValue("recurring", checked)
  };

  const validationSchema = yup.object({
    price: yup.string().required(),
    date: yup.string().required(),
    origin_account: yup.string().required(),
    destination_account: yup.string().required(),
    tags: yup.array(),
    recurring: yup.boolean(),
    repeat_on_day: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      price: "",
      date: todayDate,
      origin_account: accountsArray[0].value,
      destination_account: accountsArray[1].value,
      tags: [],
      recurring: false,
      repeat_on_day: daysOfTheMonth[4],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const iconSize = 24
  const muiColor = "transfer"

  return (
    <FormTransactionContainer onSubmit={formik.handleSubmit}>
      <h2>New Transfer</h2>
      <TransferFormLeftBlock>
        <TextField
          type="number"
          variant='standard'
          color={muiColor}
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
          color={muiColor}
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
        <FormControl>
          <InputLabel id='origin_account_label'>Origin Account</InputLabel>
          <Select
            labelId='origin_account_label'
            variant="standard"
            color={muiColor}
            name="origin_account"
            id="origin_account"
            value={originAccount}
            startAdornment={
              <InputAdornment position="start">
                <Bank size={iconSize} />
              </InputAdornment>
            }
            onChange={handleChangeOriginAccountSelect}
          >
            {accountsArray.map((account) => (
              <MenuItem key={account.title} value={account.value}>{account.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id='destination_account_label'>Destination Account</InputLabel>
          <Select
            labelId='destination_account_label'
            variant="standard"
            color={muiColor}
            name="destination_account"
            id="destination_account"
            value={destinationAccount}
            startAdornment={
              <InputAdornment position="start">
                <Bank size={iconSize} />
              </InputAdornment>
            }
            onChange={handleChangeDestinationAccountSelect}
          >
            {accountsArray.map((account) => (
              <MenuItem key={account.title} value={account.value}>{account.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </TransferFormLeftBlock>
      <TransferFormRightBlock>
        <FormControl>
          <Select
            labelId="tags"
            multiple
            variant="standard"
            color={muiColor}
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
            value={recurring}
            id="recurring"
            name="recurring"
            control={<Switch color={muiColor} checked={recurring} onChange={handleChangeRecurring} />}
            label={`Recurring transfer`}
            labelPlacement="start"
          />
        </SwitchContent>
        <FormControl>
          <InputLabel id="repeat_at_day_label">Due Date</InputLabel>
          <Select
            labelId='repeat_at_day_label'
            variant="standard"
            color={muiColor}
            name="repeat_at_day"
            disabled={!recurring}
            id="repeat_at_day"
            value={repeatDay}
            startAdornment={
              <InputAdornment position="start">
                <CalendarCheck size={iconSize} />
              </InputAdornment>
            }
            onChange={handleChangeRepeatDaySelect}
          >
            {daysOfTheMonth.map((day) => {
              return (
                <MenuItem key={day} value={day}>{day}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </TransferFormRightBlock>
      <Button color={muiColor} variant="contained" type="submit">
        Submit
      </Button>
    </FormTransactionContainer>
  )
}




