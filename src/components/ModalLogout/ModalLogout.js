import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Modal } from 'components/common/Modal';
import { ROUTES } from 'constants/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { reset } from 'redux/globalSlice';

const ModalLogout = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onConfirmHandler = () => {
    onClose();
    dispatch(reset());
    navigate(ROUTES.LOGIN);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: '300px', height: '150px', backgroundColor: '#fff' }}>
        <h2>Do you really want to log out?</h2>
        <Button variant="contained" onClick={onClose}>
          No
        </Button>
        <Button variant="contained" onClick={onConfirmHandler}>
          Yes
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalLogout;
