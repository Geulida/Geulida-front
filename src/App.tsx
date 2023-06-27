import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styles from './App.module.scss';
import ResultPage from './pages/ResultPage';
import ColorPickPage from './pages/ColorPick';
import PainterPickPage from './pages/PainterPick';
import CollectionPage from './pages/CollectionPage';
import Navi from './components/common/Navi';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import ChatPage from './pages/ChatPage';

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
            <Route path='/signup' element={<Signup />} />
            <Route path='/color-pick' element={<ColorPickPage />} />
            <Route path='/painter-pick' element={<PainterPickPage />} />
            <Route path='/chat' element={<ChatPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
