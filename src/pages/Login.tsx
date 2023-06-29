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
  const navi = useNavigate();

  const handleLogin = async () => {
    try {
      const response: any = await userLogin(email, password);
      console.log(response)
      if (response) {
        setToken(response.token);
        navi('/color-pick');
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error && typeof error.message === 'string') {
        switch (error.message) {
          case '400': {
            alert('존재하지 않는 회원입니다.');
            break;
          }
        }
      }
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Headline title='로그인' />
        <LoginInput type='text' placeholder='ID' name='userId' onChange={(e) => setEmail(e.target.value)} />
        <LoginInput type='password' placeholder='PASSWORD' name='password' onChange={(e) => setPassword(e.target.value)} />
        <div>
          <Button
            value='회원가입'
            onClick={() => {
              navi('/signup');
            }}
          />
          <Button value='로그인' onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}
export default Login;
