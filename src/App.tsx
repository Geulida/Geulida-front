import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ResultPage from './pages/ResultPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
      <Routes>
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
