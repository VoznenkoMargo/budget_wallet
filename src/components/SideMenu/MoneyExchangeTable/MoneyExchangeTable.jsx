import React from 'react';
import {TableHead, TableBody, TableRow, TableCell} from "@mui/material";
import { StyledTable, TableContainer } from './MoneyExchangeTable.style';
import { useState, useEffect } from 'react';
import fetchCurrency from "./apiService";
import { getCurrencyFromStorage, updateCurrency } from './currency';
import Spinner from '../../Spinner';

const MoneyExchangeTable = () => {
  const availableCurrency = ['USD', 'EUR', 'RUR'];

  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const updateCurrencyStates = (currency) => {
    setCurrency(currency);
    setIsLoaded(true);
  }

  useEffect(() => {
    if(!getCurrencyFromStorage(updateCurrencyStates)) {
      fetchCurrency()
        .then(
          data => {
            const params = { data, setError, availableCurrency, updateCurrencyStates };
            updateCurrency(params);
          },
          error => {
            setError(error);
          }
        )
    }
  }, [])


  if(error) {
    return (
      <div>Something went wrong... Try again later!</div>
    )
  }
  if(!isLoaded) {
    return (
      <Spinner/>
    )
  }

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
          {currency.map(currency => (
            <TableRow key={currency.currency}>
              <TableCell>{currency.currency}</TableCell>
              <TableCell>{currency.purchase}</TableCell>
              <TableCell>{currency.sale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default MoneyExchangeTable;
