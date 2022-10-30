import style from './App.module.scss'
import { useState, useContext } from 'react'
import BookCard from './components/BookCard/BookCard';
import BookList from './containers/BookList/BookList';
import SearchBar from './components/SearchBar/SearchBar';
import FlexBox from './containers/FlexBox/FlexBox';
import BookContext from './components/BookContext/BookContext';


function App() {
  const [books, setBooks] = useState([]);
  


  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Google Books API</h1>
        <BookContext.Provider value={[books, setBooks]}>
          <SearchBar />
          <FlexBox>
            <BookList />
          </FlexBox>
        </BookContext.Provider>
      </div>
    </div>
  );
}

export default App;
