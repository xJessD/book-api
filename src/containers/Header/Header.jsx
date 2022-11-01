
import SearchBar from "../../components/SearchBar/SearchBar";
import style from './Header.module.scss';

const Header = () => {

  return (
    <div className={style.Header}>
      <h1><a href="/book-api/">Book Search</a></h1>
      <SearchBar />
    </div>
    
  )
}
export default Header;