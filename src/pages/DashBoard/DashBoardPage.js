/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
import BasicTable from 'components/BasicTable/BasicTable';
import { useDispatch } from 'react-redux';
import { ButtonAddTransaction } from 'components/common';
import { ModalAddTransaction } from 'components';
import { getTransactions } from 'redux/transactionSlice';
import { getTransactionCategory } from 'redux/categoriesSlice';
import { useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/globalSlice';

// const items = [
//   createData('04.01.19', '-', 'Other', 'A gift for wife', 300.0, '6 900.00'),
//   createData('05.01.19', '+', 'Other', 'Bonus for January', 500.0, '6 900.00'),
//   createData('03.01.19', '-', 'Other', 'A gift', 600.0, '6 900.00'),
//   createData('07.01.19', '+', 'Other', 'Vegetables', 770.0, '6 900.00'),
//   createData('09.01.19', '-', 'Other', 'A gift for wife', 890.0, '6 900.00'),
// ];

function DashBoardPage() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const { isModalAddTransactionOpen } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getTransactionCategory());
  }, [dispatch]);

  function createData(Date, Type, Category, Comments, Amount, Balance, ID) {
    return { Date, Type, Category, Comments, Amount, Balance, ID };
  }

  const onModalCloseHandler = () => {
    dispatch(setIsModalAddTransactionOpen(false));
  };

  const onAddTransactionClickHandler = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  };

  const items = transactions.map(function ({
    transactionDate,
    type,
    categoryId,
    comment,
    amount,
    balanceAfter,
    id,
  }) {
    return createData(
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
      balanceAfter,
      id
    );
  });

  return (
    <>
      <BasicTable items={items} />
      <ModalAddTransaction
        open={isModalAddTransactionOpen}
        onClose={onModalCloseHandler}
      />
      <ButtonAddTransaction onClick={onAddTransactionClickHandler} />
    </>
  );
}

export default DashBoardPage;
