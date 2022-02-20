import * as S from './Modal.style';
import { Fade } from '@mui/material';

const Modal = ({ children, open, onClose }) => {
  return (
    <S.Modal open={open} onClose={onClose}>
      <Fade in={open}>{children}</Fade>
    </S.Modal>
  );
};

export default Modal;
