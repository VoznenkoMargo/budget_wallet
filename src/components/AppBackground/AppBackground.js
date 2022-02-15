import purpleEllipse from 'assets/images/ellipse-purple.png';
import peachEllipse from 'assets/images/ellipse-peach.png';
import { Background, Shape } from './AppBackground.style';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/system';

const AppBackground = () => {
  const { breakpoints } = useTheme();
  const isMobileScreen = useMediaQuery({ maxWidth: breakpoints.values.mobile });

  return (
    <Background>
      {!isMobileScreen ? (
        <>
          <Shape
            src={purpleEllipse}
            alt="background shape"
            draggable="false"
            sx={{
              bottom: '-150px',
              left: '-55px',
            }}
          />
          <Shape
            src={peachEllipse}
            alt="background shape"
            draggable="false"
            sx={{
              top: '-150px',
              right: '-55px',
            }}
          />
        </>
      ) : null}
    </Background>
  );
};

export default AppBackground;
