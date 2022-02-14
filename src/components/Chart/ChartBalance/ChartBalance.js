import React from 'react';
import s from './ChartBalance.module.scss';
import { useSelector } from 'react-redux';

export default function Balance({ periodTotal }) {
  const { isLoading } = useSelector((state) => state.global);

  return periodTotal || periodTotal === 0 ? (
    <p className={s.balance}>&#8372; {Number(periodTotal).toFixed(2)}</p>
  ) : (
    !isLoading
  );
}
