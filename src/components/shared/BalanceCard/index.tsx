import Link from 'next/link';
import { ReactNode } from 'react';
import { Avatar, Card, Tooltip } from '@mui/material'
import { BalanceCardContent } from './styles'

interface BalanceCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  to: string;
  iconColor: string;
  tooltip?: string;
}

export function BalanceCard({ title, value, icon, to, iconColor, tooltip }: BalanceCardProps) {
  return (
    <Link href={to} passHref>
      <Tooltip title={tooltip}>
        <BalanceCardContent>
          <Card>
            <div>
              <p>{title}</p>
              <strong>{value}</strong>
            </div>
            <Avatar sx={{ bgcolor: `${iconColor}`, width: "3rem", height: "3rem" }}>
              {icon}
            </Avatar>
          </Card>
        </BalanceCardContent>
      </Tooltip>
    </Link>
  )
}
