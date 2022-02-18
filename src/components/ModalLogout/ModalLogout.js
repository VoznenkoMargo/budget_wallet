import { Button } from '@mui/material';
import { Modal } from 'components/common/Modal';
import { ROUTES } from 'constants/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { signOutUser } from 'redux/userSlice';
import * as S from './ModalLogout.style';

const ModalLogout = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onConfirmHandler = async () => {
    const signOutAction = await dispatch(signOutUser());
    if (!signOutAction.error) {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <S.ModalContent>
        <S.Title>Log out from an account?</S.Title>
        <S.ButtonsContainer>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            No
          </Button>
          <Button
            variant="contained"
            onClick={onConfirmHandler}
            disableElevation
          >
            Yes
          </Button>
        </S.ButtonsContainer>
      </S.ModalContent>
    </Modal>
  );
};

export default ModalLogout;
