import React from 'react';
import {TableHead, TableBody, TableRow, TableCell} from "@mui/material";
import { StyledTable, TableContainer } from './MoneyExchangeTable.style';

const MoneyExchangeTable = (props) => {
  const {moneyExchangeData} = props;

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Purchase</TableCell>
            <TableCell>Sale</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {moneyExchangeData.map(currency => (
            <TableRow key={currency.Currency}>
              <TableCell>{currency.Currency}</TableCell>
              <TableCell>{currency.Purchase.toFixed(2)}</TableCell>
              <TableCell>{currency.Sale.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default MoneyExchangeTable;
