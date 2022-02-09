/* eslint-disable no-restricted-globals */
import * as React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './BasicTable.scss';

export default function BasicTable(props) {
  const categories = useSelector((state) => state.categories.categories);
  const { items } = props;

  const getCategoryName = (categoryId, categories) => {
    if (categories.length > 0) {
      const result = categories?.find((el) => el.id === categoryId).name;
      return result;
    }
  };

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
            {items.map(
              ({ date, type, category, comments, amount, balance, id }) => (
                <TableRow
                  key={id}
                  className={`${type === 'EXPENSE' ? 'costs' : 'income'}`}
                  sx={{
                    '& .MuiTableCell-root': {
                      textAlign: 'center',
                    },
                  }}
                >
                  <TableCell data-toggle="Date">{date}</TableCell>
                  <TableCell data-toggle="Type">{type}</TableCell>
                  <TableCell data-toggle="Category">
                    {getCategoryName(category, categories)}
                  </TableCell>
                  <TableCell data-toggle="Comments">&nbsp;{comments}</TableCell>
                  <TableCell data-toggle="Amount">{amount}</TableCell>
                  <TableCell data-toggle="Balance">{balance}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
