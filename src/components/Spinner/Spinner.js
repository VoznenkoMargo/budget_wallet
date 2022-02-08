
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Spinner.module.scss'
import {  Oval } from 'react-loader-spinner';

const Spinner = () => (
  <div className={s.Loader}>
    <Oval
   
    color="#4a56e2"
    
    height={100}
    width={100}
    visible={true}
  />
  </div>
  
);

export default Spinner;