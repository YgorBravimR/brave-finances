import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useContext } from 'react'
import * as yup from 'yup'

import { AuthContext } from '../../../contexts/AuthContext'
import { LoginFormContainer } from './styles'

export function LoginUserForm() {
  const { signIn } = useContext(AuthContext)

  const schema = yup.object({
    email: yup.string().email().required('Email required'),
    password: yup
      .string()
      .required('Password required')
      .matches(/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2))
      await signIn(values)
    },
  })

  return (
    <>
      <h2>Login Here</h2>
      <LoginFormContainer onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="standard"
          id="email"
          name="email"
          placeholder="Enter your full name here"
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
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </LoginFormContainer>
    </>
  )
}
