import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ResultPage from './page/ResultPage';

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
