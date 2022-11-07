import bottomImage from '../assets/dashboard-bottom-img.svg'
import Image from 'next/image'

import { DashboardContainer } from '../styles/pages/dashboard'

export default function Dashboard() {
  return (
    <DashboardContainer>
      <h1>lorem400</h1>
      <Image src={bottomImage} alt="" width={600} height={325} />
    </DashboardContainer>
  )

}
