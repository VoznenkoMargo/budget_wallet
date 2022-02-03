import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './BasicTable.scss';

export default function BasicTable(props) {
  const { items } = props;

  return (
    <>
      <TableContainer className="tableContainer">
        <Table className="table" aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow
              className="tableHeadRow"
              sx={{
                borderRadius: '0px',
                backgroundColor: '#fff',
                '& .MuiTableCell-root': {
                  borderRadius: '0px',
                  borderBottom: 'none',
                  textAlign: 'center',
                },
                '& .MuiTableCell-root:first-of-type': {
                  borderTopLeftRadius: '30px',
                  borderBottomLeftRadius: '30px',
                },
                '& .MuiTableCell-root:last-of-type': {
                  borderTopRightRadius: '30px',
                  borderBottomRightRadius: '30px',
                },
              }}
            >
              <TableCell>Date&nbsp;</TableCell>
              <TableCell>Type&nbsp;</TableCell>
              <TableCell>Category&nbsp;</TableCell>
              <TableCell>Comments&nbsp;</TableCell>
              <TableCell>Amount&nbsp;</TableCell>
              <TableCell>Balance&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {items.map((row) => (
              <TableRow
                key={row.Date}
                className={`${row.Type === '+' ? 'income' : 'costs'}`}
                sx={{
                  '& .MuiTableCell-root': {
                    textAlign: 'center',
                  },
                }}
              >
                <TableCell data-toggle="Date">{row.Date}</TableCell>
                <TableCell data-toggle="Type">{row.Type}</TableCell>
                <TableCell data-toggle="Category">{row.Category}</TableCell>
                <TableCell data-toggle="Comments">{row.Comments}</TableCell>
                <TableCell data-toggle="Amount">{row.Amount}</TableCell>
                <TableCell data-toggle="Balance">{row.Balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
