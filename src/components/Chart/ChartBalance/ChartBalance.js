import React from 'react';
import s from './ChartBalance.module.scss';
import { useSelector } from 'react-redux';

export default function Balance({ periodTotal }) {
  const { isLoading } = useSelector((state) => state.global);

  return (
    periodTotal ?
    <p className={s.balance}>&#8372; {periodTotal}</p>
      : !isLoading
  );
}
