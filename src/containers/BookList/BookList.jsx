import style from './BookList.module.scss';
import BookCard from '../../components/BookCard/BookCard';
import { useContext } from 'react';
import BookContext from '../../components/BookContext/BookContext';
import NoResults from '../../components/NoResults/NoResults';



const BookList = () => {
const [books] = useContext(BookContext);

  return (
    <>
    { books ?  (books.map(item => (
        <BookCard id={item['id']} info={item['volumeInfo']} />
      ))) : <NoResults />
    }
    </>
  )
};

export default BookList;