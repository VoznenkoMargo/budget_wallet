import purpleEllipse from 'assets/images/ellipse-purple.png';
import peachEllipse from 'assets/images/ellipse-peach.png';
import { Background, Shape } from './AppBackground.style';

const AppBackground = () => {
  return (
    <Background>
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
    </Background>
  );
};

export default AppBackground;
