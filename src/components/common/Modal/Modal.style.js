import { styled, alpha } from '@mui/system';
import { Modal as MuiModal } from '@mui/material';

export const Modal = styled((props) => (
  <MuiModal {...props} closeAfterTransition />
))(({ theme }) => {
  const { palette } = theme;
  return {
    '& .MuiBackdrop-root': {
      backgroundColor: alpha(palette.common.black, 0.25),
    },
  };
});
