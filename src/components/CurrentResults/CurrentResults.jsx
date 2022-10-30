import style from './CurrentResults.module.scss';

const CurrentResults = ({results}) => {
  return (
    <p className={style.CurrentResults}>results for ' {results} '</p>
  );
};

export default CurrentResults;
