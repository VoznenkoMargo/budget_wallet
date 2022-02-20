import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './BasicTable.scss';
import { Box, useTheme } from '@mui/system';
import { TRANSACTION_TYPES } from 'constants/transactionTypes';

export default function BasicTable(props) {
  const { palette } = useTheme();
  const { categories, transactions } = props;

  function createData(date, type, category, comments, amount, balance, id) {
    return { date, type, category, comments, amount, balance, id };
  }

  const items = transactions.map(function ({
    transactionDate,
    type,
    categoryId,
    comment,
    amount,
    balanceAfter,
    id,
  }) {
    return createData(
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
      balanceAfter,
      id
    );
  });

  const sortedItems = useMemo(
    () =>
      items.sort(function (a, b) {
        const c = new Date(a.date).getTime();
        const d = new Date(b.date).getTime();
        return d - c;
      }),
    [items]
  );

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
                backgroundColor: palette.common.white,
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
            {sortedItems.map(
              ({ date, type, category, comments, amount, balance, id }) => (
                <TableRow
                  key={id}
                  className={`${
                    type === TRANSACTION_TYPES.EXPENSE ? 'costs' : 'income'
                  }`}
                  sx={{
                    '& .MuiTableCell-root': {
                      textAlign: 'center',
                    },
                  }}
                >
                  <TableCell data-toggle="Date">{date}</TableCell>
                  <TableCell data-toggle="Type">
                    {type === TRANSACTION_TYPES.INCOME ? '+' : '-'}
                  </TableCell>
                  <TableCell data-toggle="Category">
                    {getCategoryName(category, categories)}
                  </TableCell>
                  <TableCell data-toggle="Comments">&nbsp;{comments}</TableCell>
                  <TableCell
                    data-toggle="Amount"
                    sx={{
                      color:
                        type === TRANSACTION_TYPES.EXPENSE
                          ? palette.tertiary.main
                          : palette.primary.main,
                    }}
                  >
                    {Number(amount).toFixed(2)}
                  </TableCell>
                  <TableCell data-toggle="Balance">
                    {Number(balance).toFixed(2)}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {transactions.length === 0 ? (
        <Box sx={{ textAlign: 'center', width: '100%', marginTop: '30px' }}>
          There's no transactions yet
        </Box>
      ) : null}
    </>
  );
}
