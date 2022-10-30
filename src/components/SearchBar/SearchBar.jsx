import { useState, useContext } from 'react';
import BookContext from '../BookContext/BookContext';
import style from './SearchBar.module.scss'

const SearchBar = () => {

  const googleAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
  const [search, setSearch] = useState('');
  const [books, setBooks] = useContext(BookContext);
  
  const searchQuery = async () => {

    // Empty strings or all white spaces returns search for undefined
    const query = (!search || search.trim().length === 0) ? 'undefined' : search.split(" ").join("+");
    const q = googleAPI+query;
    const data = await fetch(q).catch((error) => {
      setBooks('Nothing Found');
    });

    console.log('Books:', books);

    const json = await data.json();
    const items = json['items'];
    setBooks(items);
    //console.log(books);
  } 

  const onFormSubmit = async (event) => {
    event.preventDefault();
    searchQuery();
  }

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <form className={style.SearchBar} onSubmit={onFormSubmit}>
    <input type='search' placeholder='Google' onChange={onInputChange} />
    <input type='submit' value='Search' />
  </form> 
  );
};

export default SearchBar;