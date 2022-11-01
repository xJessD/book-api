import style from './App.module.scss'
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useContext } from 'react'
import BookContext from './components/BookContext/BookContext';
import PageContext from './components/PageContext/PageContext';
import Header from './containers/Header/Header';
import Results from './containers/Results/Results';
import Footer from './components/Footer/Footer';


function App() {
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [page, setPage] = useState([]);
  const [startIndex, setStartIndex] = useState([]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <BookContext.Provider value={[books, setBooks]}>
            <PageContext.Provider value={[totalItems, setTotalItems, page, setPage, startIndex, setStartIndex]}>
            <BrowserRouter basename="/book-api">
              <Header/>
              <Routes>
                <Route path='/book-api/'></Route>
                <Route path='/results' element={<Results />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </PageContext.Provider>
        </BookContext.Provider>
      </div>
    </div>
  );
}

export default App;
