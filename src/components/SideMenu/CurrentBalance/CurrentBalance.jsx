import React from 'react';
import {
  StyledCurrentBalance,
  StyledCurrentBalanceText,
  StyledCurrentBalanceTotal,
} from './CurrentBalance.style';
import { useSelector } from 'react-redux';

function separateNumber(number) {
  const NumberArray = String(number).split('').reverse();

  const separatedNumberArray = NumberArray.reduce((acc, current, ind) => {
    if ((ind + 1) % 3 === 0 && current !== '.') {
      acc.push(current, ' ');
      return acc;
    }

    acc.push(current);
    return acc;
  }, []);

  return separatedNumberArray.reverse().join('');
}

const CurrentBalance = () => {
  const balance = useSelector((state) => state.user.balance);

  return (
    <StyledCurrentBalance>
      <StyledCurrentBalanceText>your balance</StyledCurrentBalanceText>
      <StyledCurrentBalanceTotal>
        &#8372;{' '}
        {balance
          .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          .replaceAll(',', '.')}
      </StyledCurrentBalanceTotal>
    </StyledCurrentBalance>
  );
};

export default CurrentBalance;
