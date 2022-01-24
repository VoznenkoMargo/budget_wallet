import ReactDOM from 'react-dom';
import classes from './ModalAddTransaction.module.css';
import StyledSwitch from './StyledSwitch';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <StyledSwitch />
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
