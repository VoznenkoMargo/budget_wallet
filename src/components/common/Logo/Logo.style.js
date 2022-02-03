import { styled } from '@mui/system';
import { ReactComponent as Icon } from 'assets/images/logo_wallet.svg';
import { keyframes } from '@emotion/react';

const shakeAnimation = keyframes`
  0% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-4deg);
  }
`;

export const LogoName = styled('h6')(({ theme }) => {
  const { palette, typography, breakpoints } = theme;
  return {
    color: palette.common.black,
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeightBold,
    fontSize: '30px',
    [breakpoints.down('tablet')]: {
      fontSize: '20px',
    },
  };
});

export const LogoIcon = styled(Icon)(({ theme }) => {
  const { breakpoints } = theme;
  return {
    overflow: 'visible',
    '& path': {
      transition: 'transform 0.3s ease',
    },
    '&:hover': {
      animation: `${shakeAnimation} 0.2s ease-in-out 0.1s alternate`,
      animationIterationCount: 4,
      transition: 'transform 0.2s ease',
      '& path:nth-of-type(1)': {
        transform: 'translateY(-1px) translateX(-1px)',
      },
      '& path:nth-of-type(2)': {
        transform: 'translateY(-1px) translateX(1px)',
      },
    },
    [breakpoints.down('tablet')]: {
      width: '30px',
      height: '30px',
    },
  };
});

export const LogoContainer = styled('div')(({ theme }) => {
  const { breakpoints } = theme;
  return {
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px',
    [breakpoints.down('tablet')]: {
      columnGap: '15px',
    },
  };
});
