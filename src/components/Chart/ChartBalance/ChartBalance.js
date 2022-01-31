import React from 'react';
import s from './ChartBalance.module.scss';

export default function Balance() {
  return (
    <div>
      <p className={s.balance}>&#8372; {'Some value'}</p>
    </div>
  );
}
