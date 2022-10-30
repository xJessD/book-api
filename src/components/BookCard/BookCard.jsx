import style from './BookCard.module.scss';

const BookCard = (props) => {
  const {info} = props;
  const {authors, title, description, imageLinks} = info;
  console.log(info);

  return (
    <div className={style.BookCard}>
      <div className={style.BookCard__img}>
        { imageLinks ? <img src={imageLinks['thumbnail']} /> : null }
      </div>

      <div className={style.BookCard__content}>
        <div className={style.content__left}>
          <h2 className={style.content__title}>{title ? title : 'No title found'}</h2>
          <h3>{authors ? authors : 'No author found'}</h3> 
        </div>

        <div className={style.content__right}>
          <p>{description ? description : 'No description found'}</p>
        </div>
        
      </div>
    </div>
  );
};

export default BookCard;