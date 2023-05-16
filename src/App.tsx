import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
