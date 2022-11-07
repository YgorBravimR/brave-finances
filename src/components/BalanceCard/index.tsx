import { Avatar, Card, SliderValueLabel } from '@mui/material'
import { BalanceCardContent } from './styles'
import Link from 'next/link';
import { ReactNode } from 'react';

interface BalanceCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  to: string;
  iconColor: string;
}

export function BalanceCard({ title, value, icon, to, iconColor }: BalanceCardProps) {
  return (
    <Link href={to}>
      <Card sx={{
        borderRadius: "14px"
      }}>
        <BalanceCardContent>
          <div>
            <p>{title}</p>
            <strong>{value}</strong>
          </div>
          <Avatar sx={{ bgcolor: `${iconColor}`, width: "3rem", height: "3rem" }}>
            {icon}
          </Avatar>
        </BalanceCardContent>
      </Card>
    </Link>

  )
}
