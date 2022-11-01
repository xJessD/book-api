import BookCard from '../../components/BookCard/BookCard';
import { useContext } from 'react';
import BookContext from '../../components/BookContext/BookContext';
import NoResults from '../../components/NoResults/NoResults';
import Pagination from '../../components/Pagination/Pagination';
//import { useNavigate, useLocation } from 'react-router-dom';



const BookList = () => {
const [books] = useContext(BookContext);

// const navigate = useNavigate();
// const location = useLocation();

  return (
    <>
    { books ? books.map(item => (
        <BookCard id={item['id']} info={item['volumeInfo']} />
      )) : <NoResults />
    }
    {/* { books ? <Pagination /> : null } */}
    </>
  )
};

export default BookList;