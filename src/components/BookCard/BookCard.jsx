import style from './BookCard.module.scss';
import thumbnail from '../../assets/icons8-book-64.png'

const BookCard = (props) => {
  const {info} = props;
  const {authors, title, description, imageLinks} = info;
  console.log(info);

  return (
    <div className={style.BookCard}>
      <div className={style.BookCard__img}>
        { imageLinks ? <img src={imageLinks['thumbnail']} alt={title}/> : <img src={thumbnail} /> }
      </div>

      <div className={style.BookCard__content}>
        <div className={[style.content, style.content__left].join(" ")}>
          <h2 className={style.content__title}>{title ? title : 'No title found'}</h2>
          <h3 className={style.content__author}>{authors ? authors : 'No author found'}</h3> 
        </div>

        <div className={[style.content, style.content__right].join(" ")}>
          <p>{description ? description : 'No description found'}</p>
        </div>
        
      </div>
    </div>
  );
};

export default BookCard;