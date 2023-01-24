import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { Dispatch, SetStateAction } from 'react'
import * as yup from 'yup'

import { api } from '../../../services/axios'
import { RegisterUserFormContainer } from './styles'

interface Props {
  setFormState: Dispatch<SetStateAction<string>>
}

export function RegisterUserForm({setFormState}:Props) {
  const validationSchema = yup.object({
    fullname: yup.string().required('Name required'),
    email: yup.string().required('Email required'),
    password: yup
      .string()
      .required('Password required')
      .matches(/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
  })

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2))
      await api.post('/users', values)
      setFormState('login')
    },
  })

  return (
      <RegisterUserFormContainer onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          type="text"
          variant="standard"
          id="fullname"
          name="fullname"
          placeholder="Enter your full name here"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="standard"
          id="email"
          name="email"
          placeholder="Enter your email name here"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="standard"
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" type="submit">
          REGISTER
        </Button>
      </RegisterUserFormContainer>
  )
}
