import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import './App.css';
import ResultPage from './page/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
