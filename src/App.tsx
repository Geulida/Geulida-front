import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
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
import { getToken } from 'api/token';

function App() {
  const PrivateRoutes = () => {
    const auth = getToken();
    return auth ? <Outlet /> : <Navigate to='/' />;
  };

  return (
    <div className={`${styles.layout} ${styles['no-inherit']}`}>
      <div className={styles.container}>
        <BrowserRouter>
          <header>
            <Navi />
          </header>
          <div className={styles.main}>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path='/color-pick' element={<ColorPickPage />} />
                <Route path='/painter-pick' element={<PainterPickPage />} />
                <Route path='/chat' element={<ChatPage />}></Route>
                <Route path='/result' element={<ResultPage />} />
                <Route path='/collection' element={<CollectionPage />} />
              </Route>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
