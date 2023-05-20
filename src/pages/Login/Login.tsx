import Headline from 'components/common/Headline';
import LoginInput from './LoginInput';
import Button from 'components/common/Button/Button';
import styles from './Login.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <Headline title='Login' />
      <LoginInput type='text' placeholder='ID' />
      <LoginInput type='text' placeholder='PASSWORD' />
      <Button value='로그인' />
      <Button value='회원가입' />
    </div>
  );
}
export default Login;
