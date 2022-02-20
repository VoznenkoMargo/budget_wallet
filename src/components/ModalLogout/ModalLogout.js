import { Button } from '@mui/material';
import { Modal } from 'components/common/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from 'redux/userSlice';
import { lighten } from '@mui/system';
import * as S from './ModalLogout.style';

const ModalLogout = ({ open, onClose }) => {
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const onConfirmHandler = () => {
    dispatch(signOutUser());
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
            sx={{
              ':hover': {
                backgroundColor: (theme) =>
                  lighten(theme.palette.primary.main, 0.4),
              },
            }}
          >
            Yes
          </Button>
        </S.ButtonsContainer>
      </S.ModalContent>
    </Modal>
  );
};

export default ModalLogout;
