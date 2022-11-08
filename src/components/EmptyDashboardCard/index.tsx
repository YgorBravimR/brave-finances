import { EmptyDashboardCardContainer } from './styles'

import { ReactNode } from 'react';

export interface EmptyDashboardCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function EmptyDashboardCard({ icon, title, subtitle }: EmptyDashboardCardProps) {
  return (
    <EmptyDashboardCardContainer>
      {icon}
      <strong>{title}</strong>
      <p>{subtitle}</p>
    </EmptyDashboardCardContainer>
  )
}
