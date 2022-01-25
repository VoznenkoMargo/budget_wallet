import classes from './Switch.module.css';

const Switch = ({ labelDefault, labelChecked, onChange, checked }) => {
  const defaultLabelClasses = `${classes['label-default']} ${
    !checked ? classes.active : ''
  }`;
  const checkedLabelClasses = `${classes['label-checked']} ${
    checked ? classes.active : ''
  }`;

  return (
    <div className={classes['switch-root']}>
      <p className={defaultLabelClasses}>{labelDefault}</p>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={classes['switch-input']}
      />
      <p className={checkedLabelClasses}>{labelChecked}</p>
    </div>
  );
};

export default Switch;
