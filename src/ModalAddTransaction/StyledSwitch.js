import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled((props) => <Switch disableRipple {...props} />)(
  ({ theme }) => {
    return {
      width: 80,
      height: 40,
      padding: 1,
      overflow: 'visible',
      '& .MuiSwitch-switchBase': {
        top: '-2px',
        padding: 0,
        transform: 'translateX(-5px)',
        '&.Mui-checked': {
          transform: 'translateX(35px)',
          '& .MuiSwitch-thumb': {
            backgroundColor: '#FF6596',
            boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5);',
            '&:before': {
              backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>')`,
            },
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'transparent',
          },
        },
      },
      '& .MuiSwitch-track': {
        borderRadius: 30,
        backgroundColor: 'transparent',
        border: '1px solid #E0E0E0',
        position: 'relative',
      },
      '& .MuiSwitch-thumb': {
        width: 44,
        height: 44,
        backgroundColor: '#24CCA7',
        boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5);',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease',

        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V20" stroke="white" stroke-width="2"/><path d="M0 10L20 10" stroke="white" stroke-width="2"/></svg>')`,
          transition: 'background-image 0.2s ease',
        },
      },
    };
  }
);

export default StyledSwitch;
