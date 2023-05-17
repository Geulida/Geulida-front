import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styles from './App.module.scss';
import ResultPage from './pages/ResultPage';
import ColorPickPage from './pages/ColorPickPage';
import PainterPickPage from './pages/PainterPickPage';
import CollectionPage from './pages/Collection/CollectionPage';
import Navi from './components/common/Navi';

function App() {
  return (
    <div className={`${styles.layout} ${styles['no-inherit']}`}>
      <BrowserRouter>
        <header>
          <Navi />
        </header>
        <div className={styles.main}>
          <Routes>
            <Route path='/result' element={<ResultPage />} />
            <Route path='/color-pick' element={<ColorPickPage />} />
            <Route path='/painter-pick' element={<PainterPickPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
