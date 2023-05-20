import styles from './Signup.module.scss';
import Button from 'components/common/Button/Button';
import Headline from 'components/common/Headline';
import SignupInput from './SignupInput';

function Signup() {
  return (
    <div className={styles.container}>
      <Headline title='Signup' />
      <div className={styles.form}>
        <SignupInput type='text' name='userName' text='이름' />
        <SignupInput type='email' name='userId' text='ID' placeholder='example@gmail.com' />
        <SignupInput type='password' name='userPassword' text='비밀번호' placeholder='영문자+숫자, 6자부터 20자까지' />
        <SignupInput type='password' name='userPasswordCheck' text='비밀번호 확인' />
        <Button value='회원가입' />
      </div>
    </div>
  );
}

export default Signup;
