import { useState } from 'react';
import { useNavigate } from 'react-router';
import Headline from 'components/common/Headline';
import LoginInput from '../components/user/LoginInput';
import Button from 'components/common/Button/Button';
import styles from './Login.module.scss';
import { userLogin } from 'api/fetcher';
import { setToken } from 'api/token';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response: any = await userLogin(email, password);
      if (response) {
        setToken(response.token);
        navi('/color-pick');
      }
    } catch (error: any) {
      if (error.message === '400') {
        alert('');
      }
    }
  };

  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <Headline title='Login' />
      <LoginInput type='text' placeholder='ID' name='userId' onChange={(e) => setEmail(e.target.value)} />
      <LoginInput type='password' placeholder='PASSWORD' name='password' onChange={(e) => setPassword(e.target.value)} />
      <Button value='로그인' onClick={handleLogin} />
      <Button
        value='회원가입'
        onClick={() => {
          navi('/signup');
        }}
      />
    </div>
  );
}
export default Login;
