import style from './App.module.scss'
import { useState } from 'react'
import BookCard from './components/BookCard/BookCard';
import BookList from './containers/BookList/BookList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  


  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Google Books API</h1>
        <SearchBar />
        <BookList />
      </div>
    </div>
  );
}

export default App;
