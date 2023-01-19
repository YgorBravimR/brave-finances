import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

import { getAPIClient } from "../services/axios"
import { OthersPageContainer } from "../styles/pages/others"

export default function Others() {
  return (
    <OthersPageContainer>
      <h1>Others</h1>
    </OthersPageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { '@MyBills:token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  await apiClient.get('/users')

  return {
    props: {}
  }
}
