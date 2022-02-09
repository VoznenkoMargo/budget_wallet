const { styled } = require('@mui/system');

const Container = styled((props) => <div {...props}></div>)(() => {
  return {
    maxWidth: '1110px',
    margin: '0 auto',
    width: '100%',
    height: '100%',
  };
});

export default Container;
