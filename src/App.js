import style from './App.module.scss'
import { useState, useContext } from 'react'
import BookList from './containers/BookList/BookList';
import SearchBar from './components/SearchBar/SearchBar';
import FlexBox from './containers/FlexBox/FlexBox';
import BookContext from './components/BookContext/BookContext';
import  { Link, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [books, setBooks] = useState([]);
  


  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Google Books API</h1>
        <BookContext.Provider value={[books, setBooks]}>
          <BrowserRouter>
          <SearchBar />
          <Routes>
          </Routes>
          </BrowserRouter>
          
          <FlexBox>
            <BookList />
          </FlexBox>
        </BookContext.Provider>
      </div>
    </div>
  );
}

export default App;
