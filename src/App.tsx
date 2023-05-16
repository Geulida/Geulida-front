import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ResultPage from './pages/ResultPage';
import ColorPickPage from './pages/ColorPickPage';
import PainterPickPage from './pages/PainterPickPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/color-pick' element={<ColorPickPage />} />
        <Route path='/painter-pick' element={<PainterPickPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
