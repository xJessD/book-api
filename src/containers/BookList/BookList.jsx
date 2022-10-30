import style from './BookList.module.scss';
import BookCard from '../../components/BookCard/BookCard';
import { useContext } from 'react';
import BookContext from '../../components/BookContext/BookContext';



const BookList = () => {
const [books] = useContext(BookContext);

  return (
    <>
    {
      books.map(item => (
        <BookCard id={item['id']} info={item['volumeInfo']} />
      ))
    }
    </>
  )
};

export default BookList;