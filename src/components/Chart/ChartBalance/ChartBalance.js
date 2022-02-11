import React from 'react';
import s from './ChartBalance.module.scss';
import { useSelector } from 'react-redux';

export default function Balance({ expenseSummary }) {
  const { isLoading } = useSelector((state) => state.global);

  return (
    expenseSummary ?
    <p className={s.balance}>&#8372; {Math.abs(expenseSummary)}</p>
      : !isLoading
  );
}
