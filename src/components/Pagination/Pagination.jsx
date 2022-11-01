import style from './Pagination.module.scss';
import { useContext } from 'react';
import PageContext from '../PageContext/PageContext';

const Pagination = () => {
  // const [totalItems, setTotalItems] = useContext(PageContext);
  // const [startIndex, setStartIndex] = useContext(PageContext);
  // console.log(totalItems);

  return(
    <div className={style.Page}>
      <div className={style.Page__content}>
        <button>Prev Page</button>
        <div>Page</div>
        <button>Next Page</button>
      </div>
    </div>
  )
};

export default Pagination;