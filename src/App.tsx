import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styles from './App.module.scss';
import ResultPage from './pages/ResultPage';
import CollectionPage from './pages/Collection/CollectionPage';
import Navi from './components/common/Navi';
import Login from 'pages/Login/Login';

function App() {
  return (
    <div className={`${styles.layout} ${styles['no-inherit']}`}>
      <BrowserRouter>
        <header>
          <Navi />
        </header>
        <div className={styles.main}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/result' element={<ResultPage />} />
            <Route path='/collection' element={<CollectionPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
