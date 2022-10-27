import { useState } from 'react';

const SearchBar = () => {

  const googleAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  
  const searchQuery = async () => {
    const query = search.split(" ").join("+");
    //console.log(query);
    const q = googleAPI+query;
    //console.log(q);
    const data = await fetch(q);
    const json = await data.json();
    const items = json['items'];
    setBooks(items);
    console.log(books);
  } 

  const onFormSubmit = async (event) => {
    event.preventDefault();
    searchQuery();
  }

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <form onSubmit={onFormSubmit}>
    <input type='search' placeholder='Google' onChange={onInputChange} />
    <input type='submit' value='Search' />
  </form> 
  );
};

export default SearchBar;