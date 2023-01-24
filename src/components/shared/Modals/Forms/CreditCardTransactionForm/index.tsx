import { Button, Chip, FormControl, FormControlLabel, InputAdornment, MenuItem, Select, SelectChangeEvent, Switch, TextField, } from '@mui/material';
import { useFormik } from 'formik';
import { ArrowClockwise, Bookmark, CalendarCheck, CreditCard, File, Paperclip, Tag } from 'phosphor-react';
import { useContext, useState } from 'react';
import * as yup from 'yup'

import { CreditCardContext } from '../../../../../contexts/CreditCardContext';
import { todayDate } from '../../../../../utils/formatter';
import { categoriesArray, invoicesArray, tagsArray } from '../../../../../utils/transactionts';
import { SwitchContent, SwitchLabelContent } from '../InOutTransaction/styles';
import { CreditCardTransactionLeftBlock, CreditCardTransactionRightBlock, FormTransactionContainer } from './styles'

export function CreditCardTransactionForm() {
  const [category, setCategory] = useState(categoriesArray[0].value)
  const [invoice, setInvoice] = useState(invoicesArray[0].value)
  const [tagsSelect, setTagsSelect] = useState<string[]>([]);
  const [divided, setDivided] = useState(false);

  const {setCardInput, cardInput, creditCardsData} = useContext(CreditCardContext)

  const handleChangeTagsSelect = (event: SelectChangeEvent<typeof tagsSelect>) => {
    const {
      target: { value },
    } = event;
    setTagsSelect(
      typeof value === 'string' ? value.split(',') : value,
    );
    formik.setFieldValue('tags', value)
  };

  const handleChangeCategorySelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("category", value)
    setCategory(value as string);
  };

  const handleChangeCardSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("card_id", value)
    setCardInput(value as string);
  };

  const handleChangeInvoiceSelect = (event: SelectChangeEvent) => {
    const { value } = event.target
    formik.setFieldValue("invoice", value)
    setInvoice(value as string);
  };

  const handleSetIsExpenseDivided = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setDivided(checked);
    formik.setFieldValue("repeat", checked)
  };

  const validationSchema = yup.object({
    price: yup.string().required('Digite um valor acima de 1').min(0),
    date: yup.string().required('Selecione o dia da transação'),
    description: yup.string().required('Descreva sua transação, melhor para não se perder depois'),
    category: yup.string().required('Selecione a categoria'),
    card_id: yup.string().required(''),
    invoice: yup.string().required(),
    tags: yup.array(),
    istallment: yup.string(),
    repeated_times: yup.number(),
  });

  const formik = useFormik({
    initialValues: {
      price: "",
      date: todayDate,
      description: "",
      category: categoriesArray[0].value,
      card_id: cardInput,
      invoice: invoicesArray[0].value,
      tags: "",
      istallment: false,
      repeated_times: "2",
      type: "credit_card"
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const iconSize = 24
  const muiColor = "transfer"

  const switchLabel = (
    <div>
      <SwitchLabelContent>
        <ArrowClockwise size={24} />
        <span>Installment</span>
      </SwitchLabelContent>
    </div>
  )

  return (
    <FormTransactionContainer onSubmit={formik.handleSubmit}>
      {
        creditCardsData &&
        <>
            <h2> New credit card expense</h2>
            <CreditCardTransactionLeftBlock>
              <TextField
                type="number"
                variant='standard'
                color={muiColor}
                id="price"
                name="price"
                placeholder=" 0,00"
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
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
                <Select
                  variant="standard"
                  color={muiColor}
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
                  color={muiColor}
                  name="card_id"
                  id="card_id"
                  value={cardInput}
                  startAdornment={
                    <InputAdornment position="start">
                      <CreditCard size={iconSize} />
                    </InputAdornment>
                  }
                  onChange={handleChangeCardSelect}
                >
                  {creditCardsData.cards.map((card) => (
                    <MenuItem key={card.id} value={card.id}>{card.description}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  variant="standard"
                  color={muiColor}
                  name="invoice"
                  id="invoice"
                  value={invoice}
                  startAdornment={
                    <InputAdornment position="start">
                      <Paperclip size={iconSize} />
                    </InputAdornment>
                  }
                  onChange={handleChangeInvoiceSelect}
                >
                  {invoicesArray.map((invoice) => (
                    <MenuItem key={invoice.title} value={invoice.value}>{invoice.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CreditCardTransactionLeftBlock>
            <CreditCardTransactionRightBlock>
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
                  value={divided}
                  id="repeat"
                  name="repeat"
                  control={<Switch color={muiColor} checked={divided} onChange={handleSetIsExpenseDivided} />}
                  label={switchLabel}
                  labelPlacement="start"
                />
              </SwitchContent>
              <TextField
                variant='standard'
                color={muiColor}
                id="repeated_times"
                disabled={!divided}
                name="repeated_times"
                type="number"
                InputProps={{
                  endAdornment: "times"
                }}
                value={formik.values.repeated_times}
                onChange={formik.handleChange}
                error={formik.touched.repeated_times && Boolean(formik.errors.repeated_times)}
                helperText={formik.touched.repeated_times && formik.errors.repeated_times}
              />
            </CreditCardTransactionRightBlock>
            <Button color={muiColor} variant="contained" type="submit">
              Submit
            </Button>
          </>
      }
    </FormTransactionContainer >
  )
}




