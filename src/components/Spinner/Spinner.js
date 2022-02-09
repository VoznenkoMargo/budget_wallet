// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Spinner.module.scss';
import { Oval } from 'react-loader-spinner';
import { useTheme } from '@mui/system';

const Spinner = () => {
  const { palette } = useTheme();

  return (
    <div className={s.Loader}>
      <Oval
        color={palette.secondary.main}
        secondaryColor={palette.primary.main}
        height={100}
        width={100}
        visible={true}
      />
    </div>
  );
};

export default Spinner;
