import { Button, Link } from '@mui/material'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import { useContext, useState } from 'react'

import mobills_home from '../assets/mobills_home.svg'
import mobills_logo from '../assets/mybills-logo-noBg.png'
import { LoginUserForm } from '../components/homepage/LoginUserForm'
import { RegisterUserForm } from '../components/homepage/RegisterUserForm'
import { AuthContext } from '../contexts/AuthContext'
import { getAPIClient } from '../services/axios'
import { FormSectionContainer, HomePageContent, HomepageContainer, ImageSectionContainer, } from '../styles/pages/homepage'

export default function HomePage() {
  const [userPageShowed, setUserPageShowed] = useState('register')
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <HomepageContainer>
      <HomePageContent>
        <Link href="/dashboard" className="mobills_logo">
          <Image src={mobills_logo} alt="" height={45} width={140} />
        </Link>
        <ImageSectionContainer>
          <h2>Time to boost your finances.</h2>
          <Image src={mobills_home} alt="" height={456} width={320} />
          <p>
            The path is up ahead. You've taken the first step on the
            transformation of your entire finacial life and we'll guide you on
            this journey
          </p>
        </ImageSectionContainer>
        <FormSectionContainer>
          <div>
            <Button
              variant="text"
              onClick={() => setUserPageShowed('login')}
              className={userPageShowed === 'login' ? "selected" : "notSelected"}
            >
              Sign
            </Button>
            <Button
              variant="text"
              onClick={() => setUserPageShowed('register')}
              className={userPageShowed === 'register' ? "selected" : "notSelected"}
            >
              Register
            </Button>
          </div>
          {userPageShowed === 'register' ? (
            <RegisterUserForm setFormState={setUserPageShowed}/>
          ) : (
            <LoginUserForm />
          )}
        </FormSectionContainer>
      </HomePageContent>
    </HomepageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { '@MyBills:token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  await apiClient.get('/users')

  return {
    props: {}
  }
}
