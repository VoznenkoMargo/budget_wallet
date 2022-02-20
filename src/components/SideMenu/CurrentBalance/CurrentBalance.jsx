import React from 'react';
import {
  StyledCurrentBalance,
  StyledCurrentBalanceText,
  StyledCurrentBalanceTotal,
} from './CurrentBalance.style';
import { useSelector } from 'react-redux';

const CurrentBalance = () => {
  const balance = useSelector((state) => state.user.user.balance);

  return (
    <StyledCurrentBalance>
      <StyledCurrentBalanceText>your balance</StyledCurrentBalanceText>
      <StyledCurrentBalanceTotal>
        &#8372;&nbsp;{new Intl.NumberFormat('ru-RU', {minimumFractionDigits: 2})
        .format(balance)
        .replace(',','.')}
      </StyledCurrentBalanceTotal>
    </StyledCurrentBalance>
  );
};

export default CurrentBalance;