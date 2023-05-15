import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ResultPage from './page/ResultPage';
import Input from './component/common/Input';
import Button from './component/common/Button';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');
  const [temp, setTemp] = useState('');
  
  return (
    <BrowserRouter>
    <Input name='sdf' value={email} type= 'text' onChange={(e) => setEmail(e.target.value)} placeholder='이메일을 입력하세요'/>
    <Input name='sdf' value={temp} type= 'password' onChange={(e) => setTemp(e.target.value)} placeholder='비밀번호를 입력하세요'/>
    <Button value='로그인' onClick={() => console.log('버튼 클릭')}/>
      <Routes>
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
