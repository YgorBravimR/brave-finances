import { ReactNode } from 'react';
import { EmptyDashboardCardContainer } from './styles'

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
