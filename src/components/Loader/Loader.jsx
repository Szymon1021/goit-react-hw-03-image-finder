import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      justify-content="center"
      wrapperStyle
      wrapperClass
    />
  );
};
export default Loader;
