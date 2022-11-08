import { Button, Card } from '@mui/material'
import { ResumeCardContainer, SeeMoreContainer } from './styles'

import { EmptyDashboardCard, EmptyDashboardCardProps } from '../EmptyDashboardCard';
import { ReactNode } from 'react';

interface ResumeCardProps extends EmptyDashboardCardProps {
  emptyCard?: boolean;
  cardContent: ReactNode;
  cardTitle: string;
}

export function ResumeCard({ icon, title, subtitle, emptyCard, cardContent, cardTitle }: ResumeCardProps) {
  return (
    <ResumeCardContainer>
      <p>{cardTitle}</p>
      <Card>
        {emptyCard ? (<EmptyDashboardCard
          icon={icon}
          title={title}
          subtitle={subtitle}
        />
        ) : cardContent}
        <SeeMoreContainer>
          <Button>
            ver mais
          </Button>
        </SeeMoreContainer>
      </Card>
    </ResumeCardContainer>
  )
}