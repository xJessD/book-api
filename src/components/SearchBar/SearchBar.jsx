import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BookContext from '../BookContext/BookContext';
import PageContext from '../PageContext/PageContext';
import style from './SearchBar.module.scss';
import searchImg from '../../assets/icons8-search-100.png';
import CurrentResults from '../CurrentResults/CurrentResults';


const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const googleAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
  const [search, setSearch] = useState('');
  const [books, setBooks] = useContext(BookContext);
  //const [totalItems, setTotalItems] = useContext(PageContext);
  const [startIndex, setStartIndex] = useContext(PageContext);
  const maxResults = 40;
  const [results, setResults] = useState('');
  
  
  const searchQuery = async () => {
    // Empty strings or all white spaces returns search for undefined
    const query = (!search || search.trim().length === 0) ? 'undefined' : search.split(" ").join("+");
    setResults(query.split('+').join(" "));
    const q = `${googleAPI}${query}&maxResults=${maxResults}`;
    const data = await fetch(q).catch((error) => {
      setBooks('Nothing Found');
    });
    const json = await data.json();
    const items = json['items'];
    //setTotalItems(json.totalItems);
    setBooks(items);
  } 

  const onFormSubmit = async (event) => {
    event.preventDefault();
    searchQuery();
    navigate('/results');
  }

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <div>
      <form className={style.SearchBar} onSubmit={onFormSubmit}>
        <input className={style.SearchBar__input} type='search' placeholder='Search here' onChange={onInputChange}/>
        <button type='submit'><img src={searchImg} alt="Search"/></button>
      </form>
      {location.pathname === '/results' ? <CurrentResults results={results}/> : null}
    </div>
  );
};

export default SearchBar;