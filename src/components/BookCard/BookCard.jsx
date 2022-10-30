import style from './BookCard.module.scss';

const BookCard = (props) => {
  const {info} = props;
  const {authors, title, description, imageLinks} = info;
  console.log(info);

  return (
    <div className={style.BookCard}>
      <img src={imageLinks['thumbnail']} />
      <h2>{authors}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;