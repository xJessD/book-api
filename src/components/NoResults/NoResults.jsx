import style from './NoResults.module.scss';

const NoResults = () => {
  return (
    <div className={style.NoResults}>
      <p>No books have been found. Try a different search?</p>
    </div>
  );

};

export default NoResults;