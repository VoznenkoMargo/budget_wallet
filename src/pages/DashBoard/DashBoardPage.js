import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ButtonAddTransaction } from 'components/common';
import { ModalAddTransaction, BasicTable } from 'components';
import { getTransactions } from 'redux/transactionSlice';
import { getTransactionCategories } from 'redux/categoriesSlice';
import { setIsModalAddTransactionOpen } from 'redux/globalSlice';

function DashBoardPage() {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state) => state.transactions.transactions,
    shallowEqual
  );
  const categories = useSelector(
    (state) => state.categories.categories,
    shallowEqual
  );
  const { isModalAddTransactionOpen } = useSelector(
    (state) => state.global,
    shallowEqual
  );

  useEffect(() => {
    if ((transactions !== null || undefined) && transactions.length > 0) {
      return;
    }
    dispatch(getTransactions());
    dispatch(getTransactionCategories());
  }, [dispatch, transactions]);

  const onModalCloseHandler = () => {
    dispatch(setIsModalAddTransactionOpen(false));
  };

  const onAddTransactionClickHandler = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  };

  return (
    <>
      {transactions && categories && (
        <>
          <BasicTable transactions={transactions} categories={categories} />
          <ModalAddTransaction
            open={isModalAddTransactionOpen}
            onClose={onModalCloseHandler}
            categories={categories}
          />
          <ButtonAddTransaction onClick={onAddTransactionClickHandler} />
        </>
      )}
    </>
  );
}

export default DashBoardPage;
