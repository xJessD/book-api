import style from './App.module.scss'
import { useState, useContext } from 'react'
import BookContext from './components/BookContext/BookContext';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './containers/Header/Header';
import Results from './containers/Results/Results';
import Footer from './components/Footer/Footer';


function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <BookContext.Provider value={[books, setBooks]}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/'></Route>
              <Route path='/results' element={<Results />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </BookContext.Provider>
      </div>
    </div>
  );
}

export default App;
