import { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalAddTransaction.module.css';
import { Switch } from './Switch';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = () => {
  const [isExpenseMode, setIsExpenseMode] = useState(false);
  const onSwitchChangeHandler = (e) => {
    setIsExpenseMode(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <div className={classes.modal}>
      <Switch
        labelDefault="Income"
        labelChecked="Expenses"
        checked={isExpenseMode}
        onChange={onSwitchChangeHandler}
      />
    </div>
  );
};

const ModalAddTransaction = () => {
  const backdropRoot = document.getElementById('backdrop');
  const modalOverlayRoot = document.getElementById('modal-overlay');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, backdropRoot)}
      {ReactDOM.createPortal(<ModalOverlay />, modalOverlayRoot)}
    </>
  );
};

export default ModalAddTransaction;
