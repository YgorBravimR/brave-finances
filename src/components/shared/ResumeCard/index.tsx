import { Card, Divider } from '@mui/material'
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { EmptyDashboardCard, EmptyDashboardCardProps } from '../../dashboard/EmptyDashboardCard';
import { SeeMoreButton } from '../SeeMoreButton';
import { ResumeCardContainer } from './styles'

interface ResumeCardProps extends EmptyDashboardCardProps {
  emptyCard?: boolean;
  cardContent: ReactNode;
  cardTitle: string;
  destinationPage: string,
  buttonText: string
}

export function ResumeCard({ buttonText, destinationPage, icon, title, subtitle, emptyCard, cardContent, cardTitle }: ResumeCardProps) {
  const router = useRouter()

  function handleGoToDestination() {
    router.push(destinationPage)
  }

  return (
    <ResumeCardContainer>
      <strong>{cardTitle}</strong>
      <Card>
        {emptyCard ? (<EmptyDashboardCard icon={icon} title={title} subtitle={subtitle} />) : cardContent}
        <Divider />
        <SeeMoreButton text={buttonText} onClick={handleGoToDestination} />
      </Card>
    </ResumeCardContainer>
  )
}
