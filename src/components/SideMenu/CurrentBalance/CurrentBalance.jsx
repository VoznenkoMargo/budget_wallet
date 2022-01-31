import React from 'react';
import {StyledCurrentBalance, StyledCurrentBalanceText, StyledCurrentBalanceTotal} from "./CurrentBalance.style";

function separateNumber(number) {
  const NumberArray = String(number.toFixed(2)).split('').reverse();

  const separatedNumberArray = NumberArray.reduce((acc, current, ind) => {

    if(((ind+1) % 3 === 0) && current !== '.') {
      acc.push(current, ' ');
      return acc;
    }

    acc.push(current);
    return acc;
  }, [])

  return separatedNumberArray.reverse().join('');
}

const CurrentBalance = (props) => {
  let {balance} = props;
  balance = separateNumber(balance);

  return (
    <StyledCurrentBalance>
      <StyledCurrentBalanceText>
        your balance
      </StyledCurrentBalanceText>
      <StyledCurrentBalanceTotal>
        &#8372; {balance}
      </StyledCurrentBalanceTotal>
    </StyledCurrentBalance>
  );
};

export default CurrentBalance;