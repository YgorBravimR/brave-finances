import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';
import { InputDateFormatter } from '../../utils/formatter';

function createData(account: string, value: number, type: string, date: string) {
  return { account, value, type, date };
}

const todayDate = InputDateFormatter(Number(new Date()))

const rows = [
  createData('NuBank', 505, 'income', todayDate),
  createData('Inter', 125, 'exprense', todayDate),
  createData('Santander', 444, 'income', todayDate),
  createData('Itau', 676, 'exprense', todayDate),
  createData('NuBank', 505, 'income', todayDate),
  createData('Inter', 125, 'exprense', todayDate),
  createData('Santander', 444, 'income', todayDate),
  createData('Itau', 676, 'exprense', todayDate),
  createData('Inter', 125, 'exprense', todayDate),
  createData('Santander', 444, 'income', todayDate),
  createData('Itau', 676, 'exprense', todayDate),
  createData('NuBank', 505, 'income', todayDate),
  createData('Inter', 125, 'exprense', todayDate),
  createData('Santander', 444, 'income', todayDate),
  createData('Itau', 676, 'exprense', todayDate),
];

export function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.account}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {row.value}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {row.type}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {row.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
