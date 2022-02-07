import React from 'react';
import BasicTable from '../../components/BasicTable/BasicTable';

import { ButtonAddTransaction } from 'components/common';
import { ModalAddTransaction } from 'components';
import { useState } from 'react';

function createData(Date, Type, Category, Comments, Amount, Balance) {
  return { Date, Type, Category, Comments, Amount, Balance };
}
const items = [
  createData('04.01.19', '-', 'Other', 'A gift for wife', 300.0, '6 900.00'),
  createData('05.01.19', '+', 'Other', 'Bonus for January', 500.0, '6 900.00'),
  createData('03.01.19', '-', 'Other', 'A gift', 600.0, '6 900.00'),
  createData('07.01.19', '+', 'Other', 'Vegetables', 770.0, '6 900.00'),
  createData('09.01.19', '-', 'Other', 'A gift for wife', 890.0, '6 900.00'),
];

function DashBoardPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BasicTable items={items} />
      <ModalAddTransaction
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <ButtonAddTransaction
        onClick={() => {
          setOpen(true);
        }}
      />
    </>
  );
}

export default DashBoardPage;
